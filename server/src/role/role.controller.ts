import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { User } from '../user/user.entity';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('create')
  create(@Body() roleDto: CreateRoleDto): Promise<Role> {
    const role = this.roleService.create(roleDto);
    return role;
  }

  @Post('add')
  async add(@Body() data: { userId: number }): Promise<User> {
    console.log('user');
    const user = await this.roleService.add(data.userId);
    console.log(user);
    return user;
  }
}
