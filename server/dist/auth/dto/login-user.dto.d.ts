export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
interface IUserDto {
    email: string;
    id: number;
    isActive: boolean;
}
export interface ReturnLoginDto {
    accessToken: string;
    refreshToken: string;
    user: IUserDto;
}
export declare class UserDtoToClient {
    email: any;
    id: any;
    isActive: any;
    roles: any;
    constructor(user: any);
}
export {};
