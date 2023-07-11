import React, { useState,useRef } from "react";
import "./Booking.css";
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";

import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const navigate = useNavigate();

  const [credentials, setCredential] = useState({
    userId: "01",
    userEmail: "sajal@gmail.com",
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
    date: "",
  });

  const nameRef=  useRef(" "); 
  const guestSizeRef=  useRef(" "); 
  const contactRef= useRef(" ");
 
  
  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const ServiceFee = 10
   const totalamount =
    Number(price) * Number(credentials.guestSize) + Number(ServiceFee);

  const handleClick = (e) => {

    e.preventDefault();
    const name = nameRef.current.value;
    const guestSize = guestSizeRef.current.value;
    const contact = contactRef.current.value;
    
    
    if(name==='' || guestSize==='' || contact==='') {
      alert("Fill the Details to Book")
    }
    else {
      
      navigate('/Thank-You')
      console.log(credentials);
    }
  
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} (
          {reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>

        <Form className="booking_info__form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
              ref={nameRef} 
            />
          </FormGroup>

          <FormGroup>
            <input
              type="Phone"
              placeholder="Contact"
              id="contact"
              required
              onChange={handleChange}
              ref={contactRef}
              
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="People"
              id="guestSize"
              required
              onChange={handleChange}
              ref={guestSizeRef} 
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="date"
              required
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder=""
              id="date"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>


                {/* Calculation */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price}
              <i className="ri-close-circle-line"></i> 1 Person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charged</h5>
            <span>${ServiceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total Price</h5>
            <span>${totalamount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100  mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
