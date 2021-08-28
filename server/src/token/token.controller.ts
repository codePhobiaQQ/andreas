import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { TokenService } from './token.service';
import { Request, Response } from 'express';

@Controller('token')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post('logged')
  async logged(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const user = await this.tokenService.validateAccessToken(token);
      console.log('response', response);
      return response.status(200).json(user);
    } catch (err) {
      return response.status(401).json({ err });
    }
  }

  @Get('refresh')
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const { token } = request.cookies;
    const { accessToken, refreshToken } = await this.tokenService.refresh(
      token,
    );
    response.cookie('token', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return response.json({ accessToken });
  }
}
