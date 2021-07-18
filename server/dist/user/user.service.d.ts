import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Role } from 'src/role/role.entity';
import { GiveRoleDto } from 'src/user/dto/give-role.dto';
export declare class UserService {
    private usersRepository;
    private roleRepository;
    constructor(usersRepository: Repository<User>, roleRepository: Repository<Role>);
    create(userDto: CreateUserDto): Promise<User>;
    giveRole(giveRoleDto: GiveRoleDto): Promise<User>;
    viewAll(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
}
