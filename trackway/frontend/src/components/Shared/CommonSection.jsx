import React from "react";
import "./Section.css";
import { Container, Row, Col } from "reactstrap";

const Section = ({ title }) => {
  return (
    <section className="c__section">
      <Container>
        <Row>
          <Col lg="12">
            {/* <h1>{title}</h1> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
