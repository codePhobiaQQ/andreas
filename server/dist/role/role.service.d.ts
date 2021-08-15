import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
export declare class RoleService {
    private roleRepository;
    private userRepository;
    private userService;
    constructor(roleRepository: Repository<Role>, userRepository: Repository<User>, userService: UserService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    getByValue(value: string): Promise<Role>;
    getByValue1(name: string): Promise<Role[]>;
    add(value: string, id: number): Promise<User>;
}
