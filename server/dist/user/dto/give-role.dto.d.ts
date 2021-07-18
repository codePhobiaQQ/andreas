import { Role } from '../../role/role.entity';
import { User } from '../user.entity';
export declare class GiveRoleDto {
    readonly user: User;
    readonly roles: Role[];
}
