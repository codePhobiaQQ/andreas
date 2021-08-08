import IRole from "./IRole";

export interface IUser {
  email: string;
  isActivated: boolean;
  roles: IRole[];
  id: string;
}
