import {IUser} from "../../models/IUser";

export interface registerPayload {
  name: string,
  email: string,
  password: string,
}

export interface UserState {
  isAuth: boolean;
  isLoading: boolean;
  user: null | IUser
}

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTRATION = 'REGISTRATION',
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
}

interface LoginAction {
  type: UserActionTypes.LOGIN
}

interface LogoutAction {
  type: UserActionTypes.LOGOUT
}

interface RegistrationAction {
  type: UserActionTypes.REGISTRATION
}

interface SetUserAction {
  type: UserActionTypes.SET_USER,
  payload: IUser
}

interface SetAuthAction {
  type: UserActionTypes.SET_AUTH,
  payload: boolean
}

interface SetLoading {
  type: UserActionTypes.SET_LOADING,
  payload: boolean
}

export type UserAction =
  LoginAction
  | LogoutAction
  | RegistrationAction
  | SetAuthAction
  | SetUserAction
  | SetLoading
