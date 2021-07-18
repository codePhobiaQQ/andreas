import { Role } from 'src/role/role.entity';
export declare class GenerateTokenDto {
    id: number;
    email: string;
    isActivated: boolean;
    roles: Role[];
    constructor(id: number, email: string, isActivated: boolean, roles: Role[]);
}
