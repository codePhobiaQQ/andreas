import { AxiosResponse } from 'axios';
import React, {useState} from 'react'
import {Tab} from "react-bootstrap";

interface ILogin {
  login1: any
}

const LoginTab = (props: ILogin) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <label htmlFor="Reg-email">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} id="Login-email" type="text"/>

      <label htmlFor="Reg-password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} id="Login-password" type="text"/>

      <button onClick={() => props.login1({email, password})}>Start the test</button>
    </>
  );
};

export default LoginTab;