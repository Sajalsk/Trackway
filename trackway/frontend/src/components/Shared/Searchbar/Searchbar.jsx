import { useRef, React } from "react";
import "./Searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "../../../Utilis/config.js";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {

  const locationRef = useRef(" "); /* For accepting change in fields */
  const WheretoRef = useRef(" ");
  const DateRef = useRef(" ");
  const maxGroupSizeRef = useRef(0);

  const navigate = useNavigate();

  const Searchhandle = async () => {
    
    const location = locationRef.current.value;
    // const Whereto = WheretoRef.current.value;
    // const Date = DateRef.current.value;
    // const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "") {
      alert("All Fields are Required");
    }
    
    // maxgroupsize ?: maxGroupSize

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}`
    );

    if (!res.ok) alert("Sommething went Wrong");

    const result = await res.json();
    navigate(`/tours/search?city=${location}`, { state: result.data });
    
    console.log(location)
  };

  return (
    <Col>
      <div className="search__bar">

        {/* FORM */}
        <Form className="d-flex align-items-center gap-4">

          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
              {/* From */}
              <div>
                <h6>From</h6>
                <input
                  type="text"
                  placeholder="Leaving From..."
                  ref={locationRef}
                />
              </div>
            </span>
          </FormGroup>

          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-fill"></i>
              {/* Location */}
              <div>
                <h6>Location</h6>
                <input type="text" placeholder="Where to..." ref={WheretoRef} />
              </div>
            </span>
          </FormGroup>

          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            {/* date */}
            <span>
              <i className="ri-calendar-todo-line"></i>
              <div>
                <h6>Today</h6>
                <input type="date" placeholder="Date" ref={DateRef} />
              </div>
            </span>
          </FormGroup>

          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            {/* maxGroupSize */}
            <span>
              <i className="ri-group-line"></i>
              <div>
                <h6>Adults</h6>
                <input
                  type="number"
                  placeholder="Adults"
                  ref={maxGroupSizeRef}
                />
              </div>
            </span>
          </FormGroup>

          {/* Onsubmit */}
          <span className="search__icon" type="submit" onClick={Searchhandle}>
            <i className="ri-search-line"></i>
          </span>

        </Form>
      </div>
    </Col>
  );
};

export default Searchbar;
