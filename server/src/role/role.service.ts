import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { GiveRoleDto } from '../user/dto/give-role.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private userService: UserService,
  ) {}

  async create(roleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepository.create({
      name: roleDto.name,
      description: roleDto.description,
    });
    await this.roleRepository.save(role);
    return role;
  }

  async getByValue(value: string): Promise<Role> {
    try {
      const role = await this.roleRepository.findOne({
        where: { name: value },
      });
      console.log('role', role);
      return role;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async add(userId: number): Promise<User> {
    try {
      const role = await this.getByValue('admin');
      const user = await this.userService.getUserById(userId);
      console.log('user', user);
      console.log('role', role);
      let userHasRole = 0;
      user.roles.map((userRole) => {
        if (JSON.stringify(userRole) === JSON.stringify(role)) {
          userHasRole = 1;
        }
      });
      if (!userHasRole) {
        user.roles.push(role);
      }
      await this.userRepository.save(user);
      return user;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
