import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all-users')
  viewAll(): Promise<User[]> {
    return this.userService.viewAll();
  }

  @Get('get-by-id/:id')
  getById(@Param() id: number): Promise<User> {
    console.log(typeof id);
    return this.userService.getUserById(id);
  }
}
