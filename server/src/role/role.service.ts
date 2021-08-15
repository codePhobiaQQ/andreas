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
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    @InjectRepository(User) private userRepository: Repository<User>,
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

  async getByValue1(name: string): Promise<Role[]> {
    try {
      const role = await this.roleRepository.find({
        where: { name: name },
      });
      console.log('role', role);
      return role;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async add(value: string, id: number): Promise<User> {
    try {
      const role = await this.getByValue(value);
      console.log('role', role);
      const user = await this.userService.getUserById(id);
      console.log('user', user);
      if (!user.roles.includes(role)) {
        user.roles.push(role);
      }
      return user;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
