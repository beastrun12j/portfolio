import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <div>
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/pranav-kumar-10a164143/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/beastrun_12j/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Instagram" />
              </a>
              <a
                href="https://github.com/beastrun12j"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Github" />
              </a>
              <a
                href="https://leetcode.com/beastrun_12j/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon4} alt="Leetcode" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
