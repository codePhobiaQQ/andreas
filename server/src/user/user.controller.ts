import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all-users')
  // @UseGuards(JwtAuthGuard)
  viewAll(): Promise<User[]> {
    return this.userService.viewAll();
  }

  @Get('get-by-id/:id')
  getById(@Param() id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
}
