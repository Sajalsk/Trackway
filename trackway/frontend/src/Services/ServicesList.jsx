import React from "react";
import "./ServiceCard";
import { Col } from "reactstrap";

import weatherimg from "../assets//images/weather.png";
import guideImg from "../assets//images/guide.png";
import customizationImg from "../assets//images/customization.png";
import ServiceCard from "./ServiceCard";

// Services Data Array
const ServiceData = [
  {
    imgUrl: weatherimg,
    title: "Calculate Dynamic Price",
    desc: "This website enables cost-effective delivery of goods through user and user interaction and efficient logistics.",
  },

  {
    imgUrl: customizationImg,
    title: "Customise",
    desc: "Enhance delivery services and streamline operations for seamless goods transportation.",
  },

  {
    imgUrl: guideImg,
    title: "Collab",
    desc: "The data informs about the movement of individuals between different locations and helps them to connect.",
  },
];

const ServicesList = () => {
  return (
    <>
      {/* Mapping */}
      {ServiceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServicesList;
