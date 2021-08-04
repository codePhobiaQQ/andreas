import React, { Dispatch } from "react";
import { Container } from "reactstrap";
import Image from "next/image";
import useTypedSelector from "../hooks/useTypedSelector";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {Logout} from "../redux/slices/UserSlice";

interface IHeader {
  children: React.ReactNode;
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>;
}

const MainHeader = (props: IHeader) => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("logout");
    dispatch(Logout());
  };

  return (
    <>
      <header className="header">
        <Container>
          <div className="header__logo">
            <a href="#">
              <Image
                src="/assets/svg/logo.svg"
                width={182}
                height={100}
                alt="Logo"
              />
            </a>
          </div>
          <ul className="header__header-links">
            <li>
              <a href="#">Test</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
          </ul>
          <div className="header__buttons">
            {!isAuth ? (
              <button
                className="header__log-in"
                onClick={() => props.setAuthVisible(true)}
              >
                Log in
              </button>
            ) : (
              <>
                <Link href="/home">
                  <a className="header__log-in">Home</a>
                </Link>
                <button className="header__log-in" onClick={logoutHandler}>
                  Logout
                </button>
              </>
            )}

            <button className="header__try">Try for free</button>
          </div>
        </Container>
        {/*<div className="container">*/}

        {/*</div>*/}
      </header>

      {props.children}
    </>
  );
};

export default MainHeader;
