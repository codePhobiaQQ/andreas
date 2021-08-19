import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/role/role.entity';
import { GiveRoleDto } from 'src/user/dto/give-role.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const hashPassword = await bcrypt.hash(userDto.password, 3);
    const user = await this.usersRepository.create({
      email: userDto.email,
      password: hashPassword,
      name: userDto.name,
    });
    await this.usersRepository.save(user);
    return user;
  }

  async giveRole(giveRoleDto: GiveRoleDto): Promise<User> {
    const user = giveRoleDto.user;
    user.roles = giveRoleDto.roles;
    await this.usersRepository.save(user);
    return user;
  }

  async viewAll(): Promise<User[]> {
    const users = await this.usersRepository.find({ relations: ['roles'] });
    return users;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: id },
      relations: ['roles'],
    });
    return user;
  }
}
