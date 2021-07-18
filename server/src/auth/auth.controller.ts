import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';
import { TokenService } from '../token/token.service';
import { Request, Response } from 'express';

interface IRegister {
  user: User;
  accessToken: string;
  refreshToken: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) {}

  @Post('registration')
  async registration(
    @Body() userDto: CreateUserDto,
    @Res() response: Response,
  ): Promise<Response<User>> {
    const user = await this.authService.registration(userDto);
    response.cookie('token', user.refreshToken, {
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: true,
    });
    return response.json({ user });
    // return user;
  }

  @Post('login')
  async login(@Body() userDto: CreateUserDto, @Res() response: Response) {
    const user = await this.authService.login(userDto);
    response.cookie('token', user.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return response.json(user);
  }

  @Post('logout')
  async logout(@Res() response: Response, @Req() request: Request) {
    const { token } = request.cookies;
    const tokenData = await this.authService.logout(token);
    console.log('userData', tokenData);
    response.clearCookie('token');
    return response.json(token);
  }
}
