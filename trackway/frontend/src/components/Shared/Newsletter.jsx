import React from 'react'
import './Newsletter.css'
import { Container, Row, Col } from "reactstrap";
// import Male from '../../assets//images/Trackway.png'

const Newsletter = () => {
  return (
   <section className='Newsletter'>
    <Container>
    <Row>
        <Col lg='6'>
            <div className="news__content">

                <h2>Subscribe to Know amazing Offers</h2>

                <div className="news__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn news__button">Get Started</button>
                </div>

                <p>Subscribe today to know about the special offers first.</p>  
            </div>
        </Col>
        <Col lg='6'>
            <div className="news_img">
                {/* <img src={Male} alt="" /> */}
            </div>
        </Col>
    </Row>
    </Container>
   </section>
  )
}

export default Newsletter