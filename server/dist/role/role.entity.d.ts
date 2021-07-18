import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
export declare class Role extends BaseEntity {
    id: number;
    name: string;
    description: string;
    users: User[];
}
