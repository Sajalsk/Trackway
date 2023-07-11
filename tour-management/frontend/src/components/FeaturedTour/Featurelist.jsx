import React from 'react'
import Tourcard from '../Shared/Tourcard'
import TourData from '../../assets//data/tours'
import { Col } from 'reactstrap'

const Featurelist = () => {
  return (
    <>
    {/* Mapping  of TourData if exits via tours displaying in TourCard */}
    {TourData?.map(tour=> (
       <Col lg='3' className='mp-5' key={tour.id}> 
        <Tourcard tour={tour}/>
       </Col>
    ))}
    </>
  );
};

export default Featurelist