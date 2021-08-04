import {Role} from "../../server/src/role/role.entity";

export interface IUser {
  email: string;
  isActivated: boolean;
  roles: Role[];
  id: string;
}
