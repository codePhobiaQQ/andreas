import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    response.header(
      'Access-Control-Allow-Origin',
      'https://testing.nikitin-sergei.ru',
    );
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header('Access-Control-Allow-Methods', '*');
    next();
  }
}
