import { TokenService } from './token.service';
import { Request, Response } from 'express';
export declare class TokenController {
    private tokenService;
    constructor(tokenService: TokenService);
    logged(request: Request, response: Response): Promise<any>;
    refresh(request: Request, response: Response): Promise<any>;
}
