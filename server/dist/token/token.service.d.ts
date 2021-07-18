import { JwtService } from '@nestjs/jwt';
import { GenerateTokenDto } from './dto/generate-token.dto';
import { Token } from './token.entity';
import { DeleteResult, Repository } from 'typeorm';
import { TokenDto } from './dto/token.dto';
import { User } from '../user/user.entity';
interface ITokens {
    accessToken: string;
    refreshToken: string;
}
export declare class TokenService {
    private jwtService;
    private tokenRegister;
    constructor(jwtService: JwtService, tokenRegister: Repository<Token>);
    generateToken(generateTokenDto: GenerateTokenDto): Promise<ITokens>;
    saveToken(tokenDto: TokenDto): Promise<Token>;
    deleteToken(token: string): Promise<DeleteResult>;
    validateAccessToken(token: string): Promise<any>;
    validateRefreshToken(token: string): Promise<any>;
    generateNewToken(user: User): Promise<string>;
    findToken(refreshToken: string): Promise<Token>;
}
export {};
