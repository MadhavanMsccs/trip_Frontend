import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Wherever you go, no matter what the weather, always bring your own sunshine.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide ",
    desc: "The best journeys in life are those that answer questions you never thought ask.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Customs are the echo of a nation’s heart, the whispers of its soul.",
  },
];

const ServiceList = () => {
  return (
    <>
      {  
           servicesData.map((item, index) => (
           <Col lg='3' md="6" sm="12" className="mb-4" key={index}>
             <ServiceCard item={item} />
           </Col>
      ))}
     </>
  );
};

export default ServiceList;
