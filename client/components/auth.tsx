import React, {Dispatch} from 'react'
import {Nav, Tab} from 'react-bootstrap';
import close from "../assets/svg/close.svg";
import authImg from "../assets/img/auth-img.png"
import axios from "axios"

interface IAuth {
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>
}

const Auth = (props: IAuth) => {

  const registration = async () => {
    try {
      const user = await axios.post('http://localhost:5000/auth/registration', {name: "test", email: "testingi@mail.ru", password: "12345678"})
      console.log(user)
    } catch (e) {
      console.log(e.messge)
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
          <Nav variant="pills">
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

          <Tab.Content>


            <Tab.Pane eventKey="SingIn">
              <label htmlFor="email">Email</label>
              <input id="email" type="text"/>

              <label htmlFor="password">Password</label>
              <input id="password" type="text"/>

              <button onClick={() => registration()}>Start the test</button>
            </Tab.Pane>


            <Tab.Pane eventKey="Register">
              ahahah2
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