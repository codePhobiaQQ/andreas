import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('create')
  create(@Body() roleDto: CreateRoleDto): Promise<Role> {
    const role = this.roleService.create(roleDto);
    return role;
  }
}
