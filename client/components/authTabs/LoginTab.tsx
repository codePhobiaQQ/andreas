import React, {useState} from 'react'
import AuthServices from '../../services/auth.services'
import {AuthResponse} from "../../models/response/AuthResponse";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/slices/UserSlice"
import {IUser} from "../../models/IUser";
import {useRouter} from "next/router";

interface ILogin {
  login1: any
}

const LoginTab = (props: ILogin) => {

  const dispatch = useDispatch()
  const route = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginAction = async (): Promise<IUser> => {
    try {
      const response = await AuthServices.login(email, password)
      const user = response.data.user
      dispatch(setUser(user))
      console.log(user)
      route.push('/home')
      return user
    } catch (e) {
      console.log(e)
      return e
    }
  }

  return (
    <>
      <label htmlFor="Reg-email">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} id="Login-email" type="text"/>

      <label htmlFor="Reg-password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} id="Login-password" type="text"/>

      <button onClick={() => loginAction()}>Start the test</button>
    </>
  );
};

export default LoginTab;