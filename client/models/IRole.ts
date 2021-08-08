import { IUser } from "./IUser";

export default interface IRole {
  id: number;
  name: string;
  description: string;
  users: IUser[];
}
