import MainHeader from "../hoc/MainHeader";
import CSSTransition from 'react-transition-group/CSSTransition';
import {useState} from "react";
import Auth from "../components/auth";
import {Container, Row, Col} from 'reactstrap'
import planetImg from './../assets/img/planet.png'
import playImg from './../assets/img/play.png'
import quizePhoto from './../assets/img/quizePhoto.png'
import phonePhoto from './../assets/img/phonePhoto.png'
import logoFooter from './../assets/img/logo-footer.png'
import Tick from "../components/UI/tick";

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

      <section className="MainSection">
        <Container>
          <div className="contentWrapper">
            <span>
              For Balboa lovers by Balboa lovers
            </span>
            <h1>
              Learn balboa online
            </h1>
            <p>
              A Balboa haven filled with moves and footwork, practice videos and tools for solo dancers,
              couples, practice groups and teachers brought to you by top class Balboa dancers.
            </p>
            <div className="buttonsWrapper">
              <button className="blueButton">
                Try for free
              </button>
              <div className="videoButtonWrapper">
                <button className="videoButton">
                  <img src={playImg.src} alt="play"/>
                </button>
                <span>Play video</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <img src={planetImg.src} alt="planet"/>
          </div>
        </Container>
      </section>

      <section className="takeTest">
        <Container>
          <div className="contentWrapper">
            <span>
              Yes, it’s also free
            </span>
            <h2>
              Find out which kind of dancer you are!
            </h2>
            <p>
              We have created a set of questions to help you find out who you are
              as a dancer and how you could structure your practices
            </p>
            <div className="buttonsWrapper">
              <button className="blueButton">
                Try for free
              </button>
            </div>
          </div>
          <div className="imgWrapper">
            <img src={quizePhoto.src} alt="planet"/>
          </div>
        </Container>
      </section>

      <section className="howWork">
        <Container>
          <span>Step by step</span>
          <h2>How it works</h2>
          <Row>
            <Col lg={4}>
              <div className="step">
                <div className="number">01</div>
                <h3>Sign up</h3>
                <p>
                  Sign up and create an account. Are you going
                  to use Bal-Academy as a teacher or a student?
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="step">
                <div className="number">02</div>
                <h3>Do the test</h3>
                <p>
                  Do the self-assessment test in order to find
                  out how to best use Bal-Academy
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="step">
                <div className="number">03</div>
                <h3>Pricing packages</h3>
                <p>
                  Choose your most favorable pricing package, based on
                  your practice plan
                </p>
              </div>
            </Col>
          </Row>
          <Row className="bottom">
            <Col lg={4}>
              <div className="step">
                <div className="number">04</div>
                <h3>Pick and choose</h3>
                <p>
                  What would you like to learn and to practice? Pick and shoose amon
                  hundreds of videos and practices.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="step">
                <div className="number">05</div>
                <h3>Dance, dance, dance</h3>
                <p>
                  Dance and practice alone, with a friend, a dance partner or with
                  a group of friends. Enjoy!
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="step">
                <div className="number">06</div>
                <h3>Ask for feedback</h3>
                <p>
                  We all need help at times. Ask any of the
                  Bal-Academy teachers for feedback or advices
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="aboutSection">
        <Container>
          <div className="contentWrapper">
            <span>
              What else?
            </span>
            <h2>
              About Bal-Academy
            </h2>
            <p>
              Bal-Academy is an online dance school and coaching system for
              Balboa dancers of all levels.
            </p>
            <p>The system is designed to be very flexible. You will find
              inspiration and learn no matter if you are into figures and
              footwork or broader concepts and want to learn through drills,
              improvisation or more traditional instruction.
            </p>
          </div>
          <div className="imgWrapper">
            <img src={phonePhoto.src} alt="planet"/>
          </div>
        </Container>
      </section>

      <section className="subscription">
        <Container>
          <span>
            Yes, it can we free
          </span>
          <h2>
            Subscription
          </h2>
          <div className="cards">
            <div className="card">
              <div className="circle">
                <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9266 3.12793L13.3408 13.5193L4.75488 3.12793" stroke="white" stroke-width="5" stroke-linecap="round"/>
                  <path d="M12.967 18.5205C6.17007 18.5205 0.662109 24.0282 0.662109 30.8251C0.662109 37.6201 6.17007 43.128 12.967 43.128C19.762 43.128 25.2717 37.6201 25.2717 30.8251C25.2717 24.0282 19.7623 18.5205 12.967 18.5205ZM17.4035 37.6575L12.9673 35.3237L8.53116 37.6575L9.37704 32.712L5.78502 29.2126L10.7474 28.4896L12.9673 23.9933L15.1882 28.4896L20.1514 29.2126L16.5602 32.712L17.4035 37.6575Z" fill="white"/>
                </svg>
              </div>
              <span className="tarif">
                Basic
              </span>
              <div className="price">
                <span className="dollar">
                  $0
                </span>
                <span className="pere">
                  /
                </span>
                <span className="date">
                  Per mounth
                </span>
              </div>
              <div className="advantages">
                <div className="advantage">
                  <span>
                    You get 3 videos for free
                  </span>
                  <Tick />
                </div>
                <div className="advantage">
                  <span>
                    You get 3 videos for free
                  </span>
                  <Tick />
                </div>
                <div className="advantage ">
                  <span>
                    You get 3 videos for free
                  </span>
                  <Tick />
                </div>
                <div className="advantage non-active">
                  Benefet of this category
                </div>
                <div className="advantage non-active">
                  Benefet of this
                </div>
              </div>
              <button>Try for Free</button>
            </div>
            <div className="card premium">
              <div className="circle">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.0333 21.0654C39.6608 18.8454 40.0308 4.04793 40.0333 3.89543C40.0383 3.56043 39.9083 3.23793 39.6733 3.00043C39.4383 2.76293 39.1183 2.62793 38.7833 2.62793H30.0333V1.37793C30.0333 0.68793 29.4733 0.12793 28.7833 0.12793H11.2833C10.5933 0.12793 10.0333 0.68793 10.0333 1.37793V2.62793H1.28334C0.948342 2.62793 0.628342 2.76293 0.393342 3.00043C0.158342 3.23793 0.0283422 3.56043 0.0333422 3.89543C0.0358422 4.04793 0.403343 18.8479 12.0333 21.0654C13.1208 22.5254 14.5758 23.6879 16.2833 24.3829V28.8004C16.2833 31.3729 14.7383 33.6454 12.3333 34.5929L10.8083 35.2179C10.3408 35.4129 10.0333 35.8704 10.0333 36.3779V38.8779C10.0333 39.5679 10.5933 40.1279 11.2833 40.1279H28.7833C29.4733 40.1279 30.0333 39.5679 30.0333 38.8779V36.3779C30.0333 35.8704 29.7258 35.4129 29.2558 35.2204L27.7158 34.5904C25.3258 33.6454 23.7833 31.3754 23.7833 28.8029V24.3854C25.4933 23.6879 26.9483 22.5254 28.0333 21.0654ZM30.0333 15.1279V5.12793H37.4408C37.1208 8.13043 35.6958 15.5904 29.5483 18.0479C29.8333 17.1179 30.0333 16.1504 30.0333 15.1279ZM2.61584 5.12793H10.0333V15.1279C10.0333 16.1529 10.2333 17.1229 10.5208 18.0554C4.29084 15.6029 2.91334 8.14793 2.61584 5.12793Z" fill="white"/>
                </svg>
              </div>
              <span className="tarif">
                Premium
              </span>
              <div className="price">
                <span className="dollar">
                  $15
                </span>
                <span className="pere">
                  /
                </span>
                <span className="date">
                  Per mounth
                </span>
              </div>
              <div className="advantages">
                <div className="advantage active">
                  <span>
                    Benefet of this category
                  </span>
                  <Tick />
                </div>
                <div className="advantage active">
                  <span>
                    Benefet of this category is nice
                  </span>
                  <Tick />
                </div>
                <div className="advantage active">
                  <span>
                    Benefet of this category is great
                  </span>
                  <Tick />
                </div>
                <div className="advantage active">
                  <span>
                    Benefet of this category
                  </span>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.466797" y="0.149414" width="20" height="20" rx="5" fill="#5779F0"/>
                    <path d="M6.4668 9.68918L9.52562 12.4828L15.1335 6.81616" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>

                </div>
                <div className="advantage active">
                  <span>
                    Benefet of this
                  </span>
                  <Tick />
                </div>

              </div>
              <button>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9811 7.54843C19.8501 7.14346 19.4909 6.85582 19.066 6.81752L13.2934 6.29337L11.0108 0.95067C10.8425 0.559119 10.4592 0.305664 10.0333 0.305664C9.60742 0.305664 9.22411 0.559119 9.0558 0.951585L6.77318 6.29337L0.999717 6.81752C0.575512 6.85674 0.217226 7.14346 0.0855396 7.54843C-0.0461471 7.95341 0.0754685 8.39761 0.396369 8.67761L4.75973 12.5043L3.47308 18.172C3.37893 18.5888 3.54068 19.0195 3.88645 19.2695C4.07231 19.4037 4.28975 19.4721 4.50902 19.4721C4.69808 19.4721 4.88562 19.4211 5.05393 19.3204L10.0333 16.3444L15.0108 19.3204C15.3751 19.5396 15.8342 19.5196 16.1792 19.2695C16.5252 19.0188 16.6868 18.5878 16.5926 18.172L15.306 12.5043L19.6693 8.67838C19.9902 8.39761 20.1128 7.95418 19.9811 7.54843Z" fill="white"/>
                </svg>
                <span>Go Premium</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="and-numbers">
        <Container>
          <div className="card">
            <span>
              And five, and six, and five, six, seven, eight
            </span>
            <button>
              Try for free
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7373 5.25244L11.297 5.89213L12.0281 5.25244L11.297 4.61275L10.7373 5.25244ZM7.29703 1.11275C6.94374 0.803621 6.40674 0.839421 6.09761 1.19271C5.78848 1.546 5.82428 2.083 6.17758 2.39213L7.29703 1.11275ZM6.17758 8.11275C5.82428 8.42188 5.78848 8.95888 6.09761 9.31217C6.40674 9.66546 6.94374 9.70126 7.29703 9.39213L6.17758 8.11275ZM0.237305 6.10244H10.7373V4.40244H0.237305V6.10244ZM11.297 4.61275L7.29703 1.11275L6.17758 2.39213L10.1776 5.89213L11.297 4.61275ZM10.1776 4.61275L6.17758 8.11275L7.29703 9.39213L11.297 5.89213L10.1776 4.61275Z"
                  fill="#5779F0"/>
              </svg>
            </button>
          </div>
        </Container>
      </section>

      <footer>
        <Container>
          <div className="top-part">
            <img src={logoFooter.src} alt="logo"/>
            <ul className="links">
              <li><a href="#">Test</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="bottom-part">
            <span>@ since 2020</span>
            <div className="contacts">
              <a href="mailto:balacademy@gmail.com" className="email">
                balacademy@gmail.com
              </a>
              <div className="socLinks">
                <a href="#">
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.0693 3.41741H8.52996V0.873409C8.27796 0.838742 7.4113 0.760742 6.40196 0.760742C4.29596 0.760742 2.8533 2.08541 2.8533 4.52008V6.76074H0.529297V9.60474H2.8533V16.7607H5.70263V9.60541H7.93263L8.28663 6.76141H5.70196V4.80208C5.70263 3.98008 5.92396 3.41741 7.0693 3.41741Z"
                      fill="black"/>
                  </svg>
                </a>
                <a href="#">
                  <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.38495 11.3058L8.05411 15.773C8.52745 15.773 8.73245 15.5778 8.97829 15.3434L11.1975 13.3074L15.796 16.5402C16.6393 16.9914 17.2335 16.7538 17.461 15.7954L20.4794 2.21786L20.4802 2.21706C20.7477 1.02027 20.0294 0.552268 19.2077 0.845866L1.46561 7.36663C0.254751 7.81783 0.273085 8.46583 1.25977 8.75943L5.79572 10.1138L16.3318 3.78505C16.8276 3.46985 17.2785 3.64425 16.9076 3.95945L8.38495 11.3058Z" fill="black"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>

    </MainHeader>
  )
}
