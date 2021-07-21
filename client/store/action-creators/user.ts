import { Dispatch } from "react";
import { IUser } from "../../models/IUser";
import {registerPayload, UserAction, UserActionTypes} from "../types/user";
import { AuthServices } from './../../services/auth.services'


export const setAuth = (payload: boolean) => {
  return {
    type: UserActionTypes.SET_AUTH,
    payload
  }
}

// export const setUser = (payload: IUser): UserAction => {
//   return {
//     type: UserActionTypes.SET_USER,
//     payload
//   }
// }

// export const setLoading = (payload: boolean) => {
//   return {
//     type: UserActionTypes.SET_LOADING,
//     payload
//   }
// }

// export const registration = (payload: registerPayload) => {
//   return async (dispatch: Dispatch<any>) => {
//     try {
//       const { name, email, password } = payload
//       const response = await AuthServices.registration(name, email, password)
//       console.log(response)
//       dispatch({type: UserActionTypes.REGISTRATION, payload: response.data})
//     } catch (e) {
//     //   dispatch({
//     //     type: UserActionTypes.FETCH_TRACKS_ERROR,
//     //     payload: 'Произошла ошибка при загрузке треков'})
//     }
//   }
// }

