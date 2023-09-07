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
    
    // const location = locationRef.current.value;
    const Whereto = WheretoRef.current.value;
    // const Date = DateRef.current.value;
    // const maxGroupSize = maxGroupSizeRef.current.value;

    // if (location === "") {
    //   alert("All Fields are Required");
    // }
    
    // maxgroupsize ?: maxGroupSize

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?title=${Whereto}`
    );
    // &date=${Date}

    if (!res.ok) alert("Sommething went Wrong");

    const result = await res.json();

    navigate(`/tours/search?title=${Whereto}`, { state: result.data });

    // &date=${Date}
    
    // console.log(location)
    //  console.log(result);
    // console.log(res);
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
                <h6>Location</h6>
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
                <h6>Where to</h6>
                <input type="text" placeholder="Where to..." ref={WheretoRef} />
              </div>
            </span>
          </FormGroup>

          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            {/* date */}
            <span>
              <i className="ri-calendar-todo-line"></i>
              <div>
                <h6>When</h6>
                <input type="date" placeholder="Date" ref={DateRef} />
              </div>
            </span>
          </FormGroup>

          <FormGroup className="d-flex gap-4 form__group form__group-fast">
            {/* maxGroupSize */}
            <span>
            <i className="ri-briefcase-4-fill"></i>
              <div>
                <h6>Max Luggage</h6>
                <input
                  type="number"
                  placeholder="Luggage"
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
