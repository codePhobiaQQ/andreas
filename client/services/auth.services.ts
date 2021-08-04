import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthServices {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const user = await $api.post<AuthResponse>(
      "http://localhost:5000/auth/login",
      { email, password }
    );
    localStorage.setItem("token", user.data.accessToken);
    return user;
  }

  static async registration(
    email: string,
    password: string,
    name: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("auth/registration", {
      email,
      password,
      name,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("auth/logout");
  }
}
