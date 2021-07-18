import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
export declare class RoleService {
    private roleRepository;
    private userService;
    constructor(roleRepository: Repository<Role>, userService: UserService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    getByValue(value: string): Promise<Role>;
}
