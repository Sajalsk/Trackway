import React ,{useState,useEffect} from "react";
import CommonSection from "../components/Shared/CommonSection";
import "../style/tour.css";
import { Container, Row, Col } from "reactstrap";
import tours from "../assets/data/tours";
import Tourcard from "../components/Shared/Tourcard";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Newsletter from "../components/Shared/Newsletter";

const Tours = () => {
  
  const [pageCount,setpageCount] = useState(0);
  const [page,setpage] = useState(0);

  useEffect(() => {
    const pages =Math.ceil(5/4);
    setpageCount(pages);
  }, [page])
  
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

{/* Mapping of Tours & pagination  */}
      <section className="pt-0">
        <Container>
          <Row>
            {tours.map(tour=><Col lg='3' className="mb-4" key={tour.id}>
             <Tourcard tour={tour}/></Col>)}
             <Col lg='12'>
              {/* Pagination  */}
                   <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={()=>setpage(number)}
                  className={page===number?"active__page": "" }>
                    {number+1}
                  </span>
                ))}
                   </div>
             </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <div className="nz">
      <Newsletter/>
      </div>
      
    </>
  );
};

export default Tours;
