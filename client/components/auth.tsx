import React, {Dispatch, useState} from 'react'
import {Nav, Spinner, Tab} from 'react-bootstrap';
import close from "../assets/svg/close.svg";
import authImg from "../assets/img/auth-img.png"
import axios from "axios"
import RegistrationTab from "./authTabs/RegistrationTab";
import LoginTab from "./authTabs/LoginTab";

interface IAuth {
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>
}

interface IRegistrationTab {
  email: string
  password: string
  name: string
}

interface ILoginTab {
  email: string
  password: string
}

const Auth = (props: IAuth) => {

  let [loading, setLoading] = useState(false);

  const registration = async (data: IRegistrationTab) => {
    try {
      setLoading(true)
      const user = await axios.post('http://localhost:5000/auth/registration', {name: data.name, email: data.email, password: data.password})
      console.log(user)
      setTimeout(() => setLoading(false), 500)
      return user
    } catch (e) {
      console.log(e.messge)
      setTimeout(() => setLoading(false), 500)
    }
  }

  const login = async (data: ILoginTab) => {
    try {
      setLoading(true)
      const user = await axios.post('http://localhost:5000/auth/login', { email: data.email, password: data.password })
      console.log(user)
      setTimeout(() => setLoading(false), 500)
      return user
    } catch (e) {
      console.log(e.messge)
      setTimeout(() => setLoading(false), 500)
    }
  }


  return (

    <div className="auth">
      <img onClick={() => props.setAuthVisible(false)} src={close.src} alt="close" className="close" />
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
              <LoginTab login={login} />
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