import { AxiosResponse } from 'axios';
import React, {useState} from 'react'
import {Tab} from "react-bootstrap";

interface IRegistration {
  registration1: any
}

const RegistrationTab = (props: IRegistration) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <label htmlFor="Reg-name">Name</label>
      <input onChange={(e) => setName(e.target.value)} id="Reg-name" type="text"/>

      <label htmlFor="Reg-email">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} id="Reg-email" type="text"/>

      <label htmlFor="Reg-password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} id="Reg-password" type="text"/>

      <button onClick={() => props.registration1({name, email, password})}>Start the test</button>
    </>
  );
};

export default RegistrationTab;