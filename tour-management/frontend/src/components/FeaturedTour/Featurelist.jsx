import React from "react";
import Tourcard from "../Shared/Tourcard";
import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../Utilis/config.js";

const Featurelist = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getTourByFeatured`);

  console.log(featuredTours);
  return (
    <>
      {loading && <h4>Loading....</h4>}
      {error && <h4>{error}</h4>}
      {/* Mapping  of TourData if exits via tours displaying in TourCard */}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" className="mp-5" key={tour.id}>
            <Tourcard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default Featurelist;
