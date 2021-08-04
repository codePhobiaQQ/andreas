import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { TokenService } from './token.service';
import { Request, Response } from 'express';

@Controller('token')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post('logged')
  async logged(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const token = request.headers.authorization.split(' ')[1];
    const user = await this.tokenService.validateAccessToken(token);
    // response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    return response.json(user);
  }

  // @Get('test')
  // async test(@Req() request: Request, @Res() response: Response): Promise<any> {
  //   const { token } = request.cookies;
  //   console.log(request.cookies);
  //   console.log(token);
  //   // response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //   return response.json(token);
  // }

  @Get('refresh')
  async refresh(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const { token } = request.cookies;
    return response.json({ token, rofl: 'rofl' });
    const { accessToken, refreshToken } = await this.tokenService.refresh(
      token,
    );
    response.cookie('token', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    return response.json({ accessToken });
  }
}
