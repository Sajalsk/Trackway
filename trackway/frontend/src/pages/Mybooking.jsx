import React from "react";
import { Col, Row, Container } from "reactstrap";
import CommonSection from "../components/Shared/CommonSection";
import Tourcard from "../components/Shared/Tourcard";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Newsletter from "../components/Shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utilis/config";

const Mybooking = () => {
  const { data: bookings, loading, error } = useFetch(
    `${BASE_URL}/booking/getAllBooking`
  );

  return (
    <>
      {/* Title */}
      <CommonSection title={"All Bookings"} />

      {/* SearchBar */}
      <section>
        <Container>
          <Row>
            <div className="search-bar">
              <Searchbar />
            </div>
          </Row>
        </Container>
      </section>

      {/* Main logic to be resolved */}
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-05">Loading....</h4>}
          {error && <h4 className="text-center pt-05">{error}</h4>}
          {!loading && !error && (
            <Row>
              {bookings?.map((booking) => (
                <Col lg="3" className="mb-4" key={booking._id}>
                  {/* Ensure prop names are consistent */}
                  <Tourcard booking={booking} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Newsletter */}
      <div className="nz">
        <Newsletter />
      </div>
    </>
  );
};

export default Mybooking;
