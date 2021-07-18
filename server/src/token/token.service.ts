import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GenerateTokenDto } from './dto/generate-token.dto';
import { Token } from './token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {DeleteResult, Repository } from 'typeorm';
import { TokenDto } from './dto/token.dto';
import { Request } from 'express';
import { User } from '../user/user.entity';

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Token) private tokenRegister: Repository<Token>,
  ) {}

  async generateToken(generateTokenDto: GenerateTokenDto): Promise<ITokens> {
    const payload = {
      email: generateTokenDto.email,
      id: generateTokenDto.id,
      isActive: generateTokenDto.isActivated,
      roles: generateTokenDto.roles,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.SECRET_ACCESS_TOEKN,
      expiresIn: '30m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.SECRET_REFRESH_TOEKN,
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(tokenDto: TokenDto): Promise<Token> {
    const { userId, refreshToken } = tokenDto;
    const tokenData = await this.tokenRegister.findOne({ where: { userId } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }
    const token = await this.tokenRegister.create(tokenDto);
    await this.tokenRegister.save(token);
    return token;
  }

  async deleteToken(token: string): Promise<DeleteResult> {
    try {
      const tokenData = await this.tokenRegister.delete({ refreshToken: token });
      return tokenData;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException('Пользователь не залогинен');
    }
  }

  async validateAccessToken(token: string) {
    try {
      const userData = this.jwtService.verify(token, {
        secret: process.env.SECRET_ACCESS_TOEKN,
      });
      console.log(userData);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async validateRefreshToken(token: string) {
    try {
      const userData = this.jwtService.verify(token, {
        secret: process.env.SECRET_REFRESH_TOEKN,
      });
      console.log(userData);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async generateNewToken(user: User): Promise<string> {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
      isActive: user.isActive,
    };
    return this.jwtService.sign(payload, {
      secret: process.env.SECRET_REFRESH_TOEKN || 'secret_refresh',
      expiresIn: '24h',
    });
  }

  async findToken(refreshToken: string) {
    const tokenData = await this.tokenRegister.findOne({ where: refreshToken });
    return tokenData;
  }
}
