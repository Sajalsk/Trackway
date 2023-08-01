import React, { useState, useEffect } from "react";
import CommonSection from "../components/Shared/CommonSection";
import "../style/tour.css";
import { Container, Row, Col } from "reactstrap";
import Tourcard from "../components/Shared/Tourcard";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Newsletter from "../components/Shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utilis/config";

const Tours = () => {
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/GetTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setpageCount(pages);
    window.scrollTo(0,0);
  }, [page,tourCount,tours]);

  return (
    <>
      {/* Image  */}
      <CommonSection title={"All Tours"} />

      {/* SearchBar  */}
      <section>
        <Container>
          <Row>
            <div className="search-bar">
              <Searchbar />
            </div>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
          {/* Mapping of Tours & pagination  */}
        <Container>
          {!loading && <h4 className="text-center pt-05">Loading....</h4>}
          {!error && <h4 className="text-center pt-05">{error}</h4>} 

          {!loading &&  !error && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <Tourcard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                {/* Pagination  */}
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setpage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
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

export default Tours;
