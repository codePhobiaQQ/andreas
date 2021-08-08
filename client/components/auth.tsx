import React, { Dispatch, useState } from "react";
import { Nav, Spinner, Tab } from "react-bootstrap";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import RegistrationTab from "./authTabs/RegistrationTab";
import LoginTab from "./authTabs/LoginTab";
import { useDispatch } from "react-redux";

interface IAuth {
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>;
}

interface IRegistrationTab {
  email: string;
  password: string;
  name: string;
}

interface ILoginTab {
  email: string;
  password: string;
}

const Auth = (props: IAuth) => {
  // const dispatch = useDispatch()

  const [loading, setLoadingPre] = useState(false);
  // const {login, registration, setLoading} = useActions()
  // console.log(login)

  const registration1 = async (data: IRegistrationTab) => {
    try {
      setLoadingPre(true);
      const user = await axios.post("http://localhost:5000/auth/registration", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(user);
      setTimeout(() => setLoadingPre(false), 500);
      return user;
    } catch (e) {
      console.log(e.messge);
      setTimeout(() => setLoadingPre(false), 500);
    }
  };

  const login1 = async (data: ILoginTab) => {
    try {
      // setLoadingPre(true)
      // // const user = login({ email: data.email, password: data.password })
      // setLoading(true)
      // const user = await login({ email: data.email, password: data.password })
      // console.log(user)
      const user1 = await axios.post("http://localhost:5000/auth/login", {
        email: data.email,
        password: data.password,
      });
      // dispatch(setAuth(true))
      // const user = await AuthServices.login(data.email, data.password)
      console.log(user1);
      // setTimeout(() => setLoadingPre(false), 500)
      return user1;
    } catch (e) {
      console.log(e.messge);
      // setTimeout(() => setLoadingPre(false), 500)
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="auth">
      <img
        onClick={() => props.setAuthVisible(false)}
        src="/assets/svg/close.svg"
        width={30}
        height={30}
        alt="close"
        className="close"
      />
      <div className="auth__content">
        <h3>Your text, Andy!</h3>
        <p>
          Write us whatever you want. We will answer to you as fast as possible.
        </p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="SingIn">
          {loading ? (
            <Spinner animation="grow" variant="primary" />
          ) : (
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
          )}

          <Tab.Content>
            <Tab.Pane eventKey="SingIn">
              <LoginTab login1={login1} />
            </Tab.Pane>

            <Tab.Pane eventKey="Register">
              <RegistrationTab registration1={registration1} />
            </Tab.Pane>
            <Tab.Pane eventKey="Test">ahahah3</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      <div className="auth__img">
        <Image
          src="/assets/img/auth-img.png"
          width={475}
          height={613}
          alt="andreas"
        />
      </div>
    </div>
  );
};

export default Auth;
