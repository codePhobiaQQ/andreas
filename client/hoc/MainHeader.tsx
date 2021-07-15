import React, { Dispatch } from 'react'
import logo from './../assets/img/logo.png'
import {Container} from 'reactstrap'

interface IHeader {
  children: React.ReactNode
  setAuthVisible: Dispatch<React.SetStateAction<boolean>>
}

const MainHeader = (props: IHeader) => {

  return (
    <>
      <header className="header">
        <Container>
          <div className="header__logo">
            <a href="#">
              <img src={logo.src} alt=""/>
            </a>
          </div>
          <ul className="header__header-links">
            <li><a href="#">Test</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Teachers</a></li>
          </ul>
          <div className="header__buttons">
            <button
              className="header__log-in"
              onClick={() => props.setAuthVisible(true)}
            >
              Log in
            </button>
            <button className="header__tyr">Try for free</button>
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