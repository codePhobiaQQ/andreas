import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { User } from '../user/user.entity';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    add(data: {
        userId: number;
    }): Promise<User>;
}
