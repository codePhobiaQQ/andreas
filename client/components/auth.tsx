import React, {Dispatch, useState} from 'react'
import {Nav, Spinner, Tab} from 'react-bootstrap';
import close from "../assets/svg/close.svg";
import authImg from "../assets/img/auth-img.png"
import axios from "axios"
import RegistrationTab from "./authTabs/RegistrationTab";

interface IAuth {
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>
}

interface IRegistrationTab {
  email: string
  password: string
  name: string
}

const Auth = (props: IAuth) => {

  let [loading, setLoading] = useState(false);

  const registration = async (data: IRegistrationTab) => {
    try {
      setLoading(true)
      const user = await axios.post('http://localhost:5000/auth/registration', {name: data.name, email: data.email, password: data.password})
      setTimeout(() => setLoading(false), 500)
      console.log(user)
      return user
    } catch (e) {
      console.log(e.messge)
      setTimeout(() => setLoading(false), 500)
    }
  }

  return (

    <div className="auth">
      <img onClick={() => props.setAuthVisible(false)} src={close.src} alt="close" className="close"/>
      <div className="auth__content">
        <h3>Your text, Andy!</h3>
        <p>
          Write us whatever you want. We will answer to you as fast as possible.
        </p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="SingIn">

          {loading
            ? <Spinner animation="grow"  variant="primary" />
              : <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="SingIn">Sing in</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Register">Register</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Test">Test</Nav.Link>
              </Nav.Item>
            </Nav>
          }

          <Tab.Content>
            <Tab.Pane eventKey="SingIn">
              <label htmlFor="email">Email</label>
              <input id="email" type="text"/>

              <label htmlFor="password">Password</label>
              <input id="password" type="text"/>

              <button onClick={() => registration()}>Start the test</button>
            </Tab.Pane>


            <Tab.Pane eventKey="Register">
              <RegistrationTab
                registration={registration}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="Test">
              ahahah3
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

      </div>
      <div className="auth__img">
        <img src={authImg.src} alt="andreas"/>
      </div>
    </div>
  );
};

export default Auth;