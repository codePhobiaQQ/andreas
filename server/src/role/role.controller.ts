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
  add(@Body() value: string, id: number): Promise<User> {
    const user = this.roleService.add(value, id);
    return user;
  }

  @Post('shaw')
  shaw(@Body() name: string): Promise<any> {
    const role = this.roleService.getByValue1(name);
    return role;
  }
}
