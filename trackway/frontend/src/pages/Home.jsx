import React from "react";
import "../style/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets//images/hero-img01.jpg";
import heroImg02 from "../assets//images/hero-img02.jpg";
import heroVideo from "../assets//images/hero-video.mp4";
import worldImage from "../assets//images/world.png";
import exp from "../assets//images/Travel.avif";
// import MIG from '../components/ImageGallery/MIG';

import Subtitle from "../components//Shared/Subtitle.jsx";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import ServicesList from "../Services/ServicesList";
import Featurelist from "../components/FeaturedTour/Featurelist";
import Newsletter from "../components/Shared/Newsletter";
// import Test from "../components/Test/Test";


const Home = () => {
  return (
    <>
      {/* Starting */}

      <Container>
        <Row>
             {/* Heading & Paragraph */}
          <Col lg="6">
         
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know before you go"} />
                <img src={worldImage} alt="" />
              </div>
              <h1>
                Travelling Opens the Door to creating {" "}
                <span className="highlight"> memories</span>
              </h1>
              <p>
              This website enables cost-effective and expedited delivery of goods through user-user interaction for fostering
              efficient logistics. Enhance delivery services and streamline operations for seamless goods transportation
              </p>
            </div>
          </Col>

          {/* Images  & Video */}
        
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" srcSet="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg="2">

            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" srcSet="" />
            </div>
          </Col>
         

          {/* SearchBar */}

          <Searchbar />
        </Row>
      </Container>
     
        

      {/* Services-Subtitle & ServicesList*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Are?</h5>
              <h2 className="services__title">We Offer out Best Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* Booking & FeatureList */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Travels</h2>
            </Col>
            <Featurelist />
          </Row>
        </Container>
      </section>

      {/* Expereinces  */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <h2>
                  With All Our Experience <br />
                  We Will Serve you
                </h2>
                <p>
                Enhance delivery services and streamline operations for seamless goods transportation. <br />
                The data informs about the movement of individuals between different locations and helps them to connect.
                </p>
               

              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>20K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>10+</span>
                  <h6>Years</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="expereince__img">
                <img src={exp} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

 {/* Gallery & MIG */}
<div>
     
      {/* <section>
      <Container>
        <Row>
          <Col lg='6'>
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title">Visit Our Customer Tour Gallery</h2>
          </Col>
          <Col lg='12'>
            <MIG/>
          </Col>
        </Row>
      </Container>
    </section> */}


      </div>

   {/* // Slider  */}
      <div>
     
      {/* <section>
        <Container>
          <Row>
            <Col lg='12'>
                <Subtitle subtitle ={'Customers Feedback'}/>
                <h2 className="test__title">What our Customers think about us?</h2>
            </Col>
            <Col lg='12'>
              <Test/>
            </Col> 
          </Row>
        </Container>
      </section> */}
      </div>

{/* Newsletter  */}
<Newsletter/>

{/* Footer as Route */}

    </>
  );
};

export default Home;
