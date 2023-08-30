import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import "./Thankyou.css";
// import Newsletter from "../components/Shared/Newsletter";
// import Booking from "../components/Booking/Booking";
import './Mybooking.css'

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utilis/config";

const Mybooking = ({ tourName , guestSize , fullName} ) => { {/* Booking*/}

  // const { tourName , guestSize , fullName} = Booking;

  //  console.log(tourName);
  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`);
  // const [page, setpage] = useState(0);

  return (
    <>
      <section>
        <Container>
          <Row>
          
            <Col lg="12" className="pt-5 text-center">
            <div>
              
              <h1  className="head">Upcoming Tours</h1>
             
           
      <div className="cardBook" style={{ width: "18rem", margin: "0px 0px 45px" }}>
         <img srcSet="https://wallpaperaccess.com/full/41839.jpg" alt="" />
        <div className="card-body">
        <h3>
          ${fullName} <span>/per person</span>
        </h3>
          <h5 style={{marginTop:"10px"}} className="card-title">{tourName}</h5>
          <p className="card-text">Guest Size{guestSize}</p>
          <p className="card-text">
            <small className="text-muted">
              {" "} Book for {" "} {new Date().toGMTString()}{" "}
            </small>
          </p>
          <button onClick={()=>{
             window.open ('https://www.signzy.com/fintech-apis/aadhaar-verification-api/');
          }}  className="btn btm-sm btn-dark">
            Know More
          </button>
        </div>
      </div>
    </div>
             
            </Col>
          </Row>
        </Container>
      
      </section>

     
    </>
  );
};

export default Mybooking;


