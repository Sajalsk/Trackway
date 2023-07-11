import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";

import { Link } from "react-router-dom";
import logo from "../../assets/images/Trackway.png";

const quick_link = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/about",
    display: "About",
  },

  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_link2 = [
  {
    path: "/Gallery",
    display: "Gallery",
  },

  {
    path: "/login",
    display: "Login",
  },

  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <section>
      <Container>
        <Row>
          {/* Logo  */}
          <Col lg="3">
            <div className="logo1">
              <img src={logo} alt="" />
              <p>
                Changing the way of Delivering packages around the Globe.
              </p>

              <div className="social d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i class="ri-facebook-fill"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Discover */}
          <Col lg="3">
            <h5 className="footer__link-title">Discovery</h5>

            <ListGroup className="footer__quick-links">
              {quick_link.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* QuickLinks  */}
          <Col lg="3">
            <h5 className="footer__link-title">Quick-Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_link2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact  */}
          <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
             
                <ListGroupItem  className="ps-0 border-0 d-felx align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>Address</h6>
                  <p className="mb-0">Delhi, India</p>
                </ListGroupItem>

                <ListGroupItem  className="ps-0 border-0 d-felx align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>Email</h6>
                  <p className="mb-0">Trackway@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem  className="ps-0 border-0 d-felx align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>Phone</h6>
                  <p className="mb-0">+9876736210</p>
                </ListGroupItem>
            
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
