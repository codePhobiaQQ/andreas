import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private readonly reflector: Reflector,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const roles = this.reflector.get<string>('roles', context.getHandler());
    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Пользователь не авторизован',
        });
      }
      const user = this.tokenService.validateAccessToken(
        req.headers.authorization.split(' ')[1],
      );
      const userRoles = [];
      user.roles.forEach((role) => {
        userRoles.push(role.name);
      });
      const intersection = userRoles.filter((role) => roles.includes(role));
      if (intersection.length != 0) {
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
    return false;
  }
}
