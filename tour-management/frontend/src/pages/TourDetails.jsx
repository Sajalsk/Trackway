import React, { useRef, useState } from "react";
import "../style/tourDetail.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import avatar from "../assets//images/avatar.jpg";

import { useParams } from "react-router-dom";
import toursdata from "../assets/data/tours";
import CalculateavgRating from "../Utilis/avgrating";
import Booking from "../components/Booking/Booking";

const TourDetails = () => {
  const { id } = useParams();
  const reviewsMsgRef = useRef("");
  const [tourRating, settourRating] = useState(null);

  const tour = toursdata.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
  } = tour;

  const { totalRatintg, avgRating } = CalculateavgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    alert(`${reviewText} , ${tourRating}`);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              {/* Image  */}
              <img src={photo} alt="" />
              <div className="tour__info">
                {/* Title  */}
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  {/* Rating  */}
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>{" "}
                    {CalculateavgRating === 0 ? null : avgRating}
                    {totalRatintg === 0 ? (
                      "Not Rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>
                  {/* Address  */}
                  <span>
                    <i className="ri-map-pin-line"></i> {address}
                  </span>
                </div>

                <div className="tour-extra-details">
                  {/* City  */}
                  <span>
                    <i className="ri-map-pin-add-line"></i> {city}
                  </span>
                  <span>
                    {/* Distance  */}
                    <i className="ri-map-2-line"></i> {distance} miles
                  </span>
                  {/* Price  */}
                  <span>
                    <i className="ri-exchange-dollar-line"></i>${price}/Person
                  </span>
                  {/* Size  */}
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize} People
                  </span>
                </div>
                {/* Description  */}
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              {/* End of Tour Content  */}

            {/* Number of Review  */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form
                  onSubmit={SubmitHandler}
                  className="d-flex align-items-center gap-3 mb-4 rating__group"
                >
                    {/* Star  */}
                  <span onClick={() => settourRating(1)}>
                    1<i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => settourRating(2)}>
                    2<i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => settourRating(3)}>
                    3<i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => settourRating(4)}>
                    4<i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => settourRating(5)}>
                    5<i className="ri-star-s-fill"></i>
                  </span>

                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewsMsgRef}
                      placeholder="Share your feedback"
                      required
                    />
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                 {/* Reviews  */}
                <ListGroup>
                  {reviews?.map((reviews) => (
                    <div className="review__item" key={reviews.id}>
                      {/* Image  */}
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-felx align-items-center justify-content-between">
                          <div>
                            <h5>End-User</h5>
                            <p>
                              {" "}
                              {new Date("12-09-23").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                        </div>
                        <h6>Not Driven</h6>
                        <span className="d-felx align-items-center">
                          1<i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>

            {/* Book Now  */}
          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;
