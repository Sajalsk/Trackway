import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./Thankyou.css";
import './Mybooking.css'

import CommonSection from "../components/Shared/CommonSection";
import "../style/tour.css";
import Tourcard from "../components/Shared/Tourcard";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Newsletter from "../components/Shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utilis/config";

const Mybooking = () => { 

const { data: books, loading, error } = useFetch(`${BASE_URL}/booking`);

    return (
    <>
      {/* Title  */}
      <CommonSection title={"All Bookings"} />

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
       
       {/* Loading && error  */}
        <Container>
          {loading && <h4 className="text-center pt-05">Loading....</h4>}  {/*  !loading   */}
          {error && <h4 className="text-center pt-05">{error}</h4>}         {/*  !error   */}

          {!loading &&  !error && (
            <Row>
                 {/* Mapping of Tours & pagination  */}
              {books?.map((book) => (                         /* tour = tours */
                <Col lg="3" className="mb-4" key={book.id}>
                  <Tourcard book={book} />
                </Col>
              ))}

                 {/* Pagination  */}
              {/* <Col lg="12">
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
              </Col> */}

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


