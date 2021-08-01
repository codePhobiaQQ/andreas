import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export class AuthServices {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    console.log($api)
    return $api.post<AuthResponse>('auth/login', {email, password})
  }

  static async registration(email: string, password: string, name: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('auth/registration', {email, password, name})
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
}