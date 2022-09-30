import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/screen.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="lo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#" className="icon">
                <img src={navIcon1} alt="Icon" className="icon-1" />
              </a>
              <a href="#" className="icon">
                <img src={navIcon2} alt="Icon" className="icon-1" />
              </a>
              <a href="#" className="icon">
                <img src={navIcon3} alt="Icon" className="icon-1" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Develped by Em-Tech</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
