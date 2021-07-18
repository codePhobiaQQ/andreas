import { Role } from '../../role/role.entity';
import { User } from '../user.entity';

export class GiveRoleDto {
  readonly user: User;
  readonly roles: Role[];
}
