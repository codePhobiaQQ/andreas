import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { GiveRoleDto } from '../user/dto/give-role.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
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
    const role = this.roleRepository.findOne({ where: { name: value } });
    return role;
  }
}
