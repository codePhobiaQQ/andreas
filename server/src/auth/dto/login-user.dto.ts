import { User } from '../../user/user.entity';

export class LoginUserDto {
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

export class UserDtoToClient {
  email;
  id;
  isActive;
  roles;

  constructor(user) {
    this.email = user.email;
    this.id = user.id;
    this.isActive = user.isActive;
    this.roles = user.roles;
  }
}
