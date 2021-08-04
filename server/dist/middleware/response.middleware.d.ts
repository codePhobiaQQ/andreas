import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class ResponseMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: NextFunction): void;
}
