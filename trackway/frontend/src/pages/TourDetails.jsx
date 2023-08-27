import React, { useEffect, useRef, useState, useContext } from "react";
import "../style/tourDetail.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import avatar from "../assets//images/avatar.jpg";

import { useParams } from "react-router-dom";
// import toursdata from "../assets/data/tours";
import CalculateavgRating from "../Utilis/avgrating";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utilis/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {

  const { id } = useParams();
  const reviewsMsgRef = useRef("");
  const [tourRating, settourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetch data from Database API
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // Static Data
  // const tour = toursdata.find((tour) => tour.id === id);
  
  const {
    title,
    desc,
    price,
    photo,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
    featured,
  } = tour;

 //  console.log(tour);
 
  const { totalRatintg, avgRating } = CalculateavgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    // alert(`${reviewText} , ${tourRating}`);

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }
      const reviewobj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewobj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <section>
      <Container>
        {loading && <h4 className="text-center pt-05">Loading....</h4>}
        {error && <h4 className="text-center pt-05">{error}</h4>}
        {!loading && !error && (
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
                        <span>({reviews?.length})</span>
                        //  console("Just hitted")
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
                    <span>
                      <i className="ri-group-line"></i> {featured} Featured
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
                              <h5>{reviews.username}</h5>
                              <p>
                                {" "}
                                {new Date(reviews.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                          </div>
                          <h6>{reviews.reviewText}</h6>
                          <span className="d-felx align-items-center">
                            {reviews.rating}
                            <i className="ri-star-s-fill"></i>
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
        )}
      </Container>
    </section>
  );
};

export default TourDetails;
