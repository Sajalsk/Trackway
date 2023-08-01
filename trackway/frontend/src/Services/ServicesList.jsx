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
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus id accusantium ut.",
  },

  {
    imgUrl: customizationImg,
    title: "Customise",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus id accusantium ut.",
  },

  {
    imgUrl: guideImg,
    title: "Guide",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus id accusantium ut.",
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
