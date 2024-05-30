import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
<<<<<<< HEAD
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
=======
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
>>>>>>> 76c932207899f6a33162e2f2a49e13de092d7d20
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
<<<<<<< HEAD
              Ever since, I discovered programming, I have been captivated by
              its endless possibilities and have consistently expanded my skills
              and knowledge. I am highly proficient in both front-end
              development and backend development. I have a keen interest in
              creating innovative web technologies, Mobile applications and
              products.
              <br />
              I am passionate about leveraging my skills to develop cutting-edge
              products using Node.js and modern JavaScript libraries and
              frameworks, always striving to deliver high-quality, efficient,
              and user-friendly solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  Front-end development and Backend with MERN stack.{" "}
                </b>
=======
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, CSS, Bootstrap, Javascript and React. </b>
>>>>>>> 76c932207899f6a33162e2f2a49e13de092d7d20
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
<<<<<<< HEAD
                <b className="purple">
                  Web & Mobile Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
=======
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
>>>>>>> 76c932207899f6a33162e2f2a49e13de092d7d20
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
<<<<<<< HEAD
                <b className="purple"> Express.js</b>
=======
>>>>>>> 76c932207899f6a33162e2f2a49e13de092d7d20
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
<<<<<<< HEAD
                  href="https://github.com/islahuddinn"
=======
                  href="https://github.com/Sallu-sb"
>>>>>>> 76c932207899f6a33162e2f2a49e13de092d7d20
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Slahuddinoffic1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
<<<<<<< HEAD
                  href="https://www.linkedin.com/in/slahuddinn/"
=======
                  href="https://www.linkedin.com/in/slahuddin-ch87/"
>>>>>>> 76c932207899f6a33162e2f2a49e13de092d7d20
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
