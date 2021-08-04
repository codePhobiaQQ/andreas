import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { RoleService } from '../role/role.service';
import { LoginUserDto, ReturnLoginDto } from './dto/login-user.dto';
import { Repository } from 'typeorm';
import { TokenService } from '../token/token.service';
export declare class AuthService {
    private usersRepository;
    private userService;
    private roleService;
    private tokenService;
    constructor(usersRepository: Repository<User>, userService: UserService, roleService: RoleService, tokenService: TokenService);
    registration(userDto: CreateUserDto): Promise<any>;
    login(loginDto: LoginUserDto): Promise<ReturnLoginDto>;
    logout(token: string): Promise<void>;
    validateUser(loginDto: LoginUserDto): Promise<User>;
}
