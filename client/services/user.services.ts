import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class UserServices {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }

  static async logged(): Promise<any> {
    return $api.post("/token/logged");
  }

  static findRole(role: string, user: IUser): boolean {
    let flag = false;
    if (user.roles) {
      user.roles.map((el, index) => {
        if (el.name !== "admin") {
          flag = true;
        }
      });
    }
    return flag;
  }
}
