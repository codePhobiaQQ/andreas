import { IUser } from "../../models/IUser";
import { UserAction, UserActionTypes, UserState } from "../types/user";

const initialState: UserState = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    // case UserActionTypes.LOGIN:
    //   return state
    // case UserActionTypes.LOGOUT:
    //   return state
    // case UserActionTypes.REGISTRATION:
    //   return state
    // case UserActionTypes.SET_LOADING:
    //   return {...state, isLoading: action.payload}
    case UserActionTypes.SET_AUTH:
      return {...state, isAuth: action.payload}
    default:
      return state
  }
}