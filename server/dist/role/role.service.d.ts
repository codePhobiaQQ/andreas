import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
export declare class RoleService {
    private readonly roleRepository;
    private readonly userRepository;
    private userService;
    constructor(roleRepository: Repository<Role>, userRepository: Repository<User>, userService: UserService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    getByValue(value: string): Promise<Role>;
    add(userId: number): Promise<User>;
}
