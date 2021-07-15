import style from '../styles/home.module.sass'
import MainHeader from "../hoc/MainHeader";
import CSSTransition from 'react-transition-group/CSSTransition';
import close from "./../assets/svg/close.svg"
import {useState} from "react";
import Auth from "../components/auth";

export default function Home() {

  const [authVisible, setAuthVisible] = useState(false)

  return (
    <MainHeader
      setAuthVisible={setAuthVisible}
    >

      <CSSTransition
        in={authVisible}
        classNames="fadeIn"
        timeout={200}
        unmountOnExit
      >
        <Auth
          setAuthVisible={setAuthVisible}
        />
      </CSSTransition>

    </MainHeader>
  )
}
