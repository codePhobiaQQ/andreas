import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    response.setHeader(
      'Access-Control-Allow-Origin',
      'https://testing.nikitin-sergei.ru',
    );
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', '*');
    next();
  }
}
