import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    try {
      response.setHeader('Access-Control-Allow-Credentials', 'true');
      response.setHeader('Access-Control-Allow-Methods', '*');
      response.setHeader(
        'Access-Control-Allow-Origin',
        'http://localhost:3000',
      );
      return next();
    } catch (e) {
      return next(e);
    }
    next();
  }
}
