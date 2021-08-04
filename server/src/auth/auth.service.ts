import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { RoleService } from '../role/role.service';
import {
  LoginUserDto,
  ReturnLoginDto,
  UserDtoToClient,
} from './dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { TokenService } from '../token/token.service';
import { TokenDto } from '../token/dto/token.dto';
import { GenerateTokenDto } from '../token/dto/generate-token.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private userService: UserService,
    private roleService: RoleService,
    private tokenService: TokenService,
  ) {}

  async registration(userDto: CreateUserDto): Promise<any> {
    //Создаем пользователя
    const user = await this.userService.create(userDto);
    //Берем для него дефолтную роль юзера
    const role = await this.roleService.getByValue('user');
    //Даем ему эту роль
    await this.userService.giveRole({ user, roles: [role] });
    //Возвращаем юзера
    const tokenPayload = new GenerateTokenDto(
      user.id,
      user.email,
      user.isActive,
      user.roles,
    );
    const token = await this.tokenService.generateToken(tokenPayload);
    const saveTokenPayload = new TokenDto(user.id, token.refreshToken);
    await this.tokenService.saveToken(saveTokenPayload);

    return { user, ...token };
  }

  async login(loginDto: LoginUserDto): Promise<ReturnLoginDto> {
    //Валлидируем есть ли такой пользователь
    const user = await this.validateUser(loginDto);
    const userDto = new UserDtoToClient(user);
    const tokenPayload = new GenerateTokenDto(
      user.id,
      user.email,
      user.isActive,
      user.roles,
    );
    //Генерируем для него новый токен
    const tokens = await this.tokenService.generateToken(tokenPayload);

    //Создаем дто и перезаписываем токен
    await this.tokenService.saveToken({
      userId: user.id,
      refreshToken: tokens.refreshToken,
    });
    //Возвращаем новый токен, чтобы перезаписать его в куках
    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(token: string): Promise<void> {
    await this.tokenService.deleteToken(token);
  }

  //Валлидируем логин и пароль (есть ли такой пользователь в таблице)
  async validateUser(loginDto: LoginUserDto): Promise<User> {
    const candidate = await this.usersRepository.findOne({
      where: { email: loginDto.email },
      relations: ['roles'],
    });
    if (!candidate) {
      throw new HttpException(
        'Пользователя с таким email нет',
        HttpStatus.NOT_FOUND,
      );
    }
    const passEqual = await bcrypt.compare(
      loginDto.password,
      candidate.password,
    );
    if (!passEqual) {
      throw new HttpException('Неверный пароль', HttpStatus.BAD_REQUEST);
    }
    return candidate;
  }
}
