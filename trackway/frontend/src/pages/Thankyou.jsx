import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Container } from "reactstrap";
import "./Thankyou.css";
import Newsletter from "../components/Shared/Newsletter";
// import Booking from "../components/Booking/Booking";

const Thankyou = (props) => {

  // const { booking } = props;

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i>{" "}
              </span>
              <h1 className=".mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your Travel is Booked </h3>
              <h5 style={{color:"red"}}className="mb-4">Check Bookings </h5>
              <Button className="btn primary__btn w-25">
                <Link to="/home">Back To Home</Link>
              </Button>

           
            </div>
          </Col>
        </Row>
      </Container>
      <div className="Newsletter">
        <Newsletter />
      </div>
    </section>
  );
};

export default Thankyou;
