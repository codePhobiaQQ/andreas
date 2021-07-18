import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';
import { TokenService } from '../token/token.service';
import { Request, Response } from 'express';
export declare class AuthController {
    private authService;
    private tokenService;
    constructor(authService: AuthService, tokenService: TokenService);
    registration(userDto: CreateUserDto, response: Response): Promise<Response<User>>;
    login(userDto: CreateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
    logout(response: Response, request: Request): Promise<Response<any, Record<string, any>>>;
}
