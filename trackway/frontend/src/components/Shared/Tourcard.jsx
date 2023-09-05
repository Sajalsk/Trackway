import React from 'react'
import { Card,CardBody } from 'reactstrap'
import {Link} from "react-router-dom";
import './Tourcard.css'
import CalculateavgRating from '../../Utilis/avgrating';

const Tourcard = ({tour}) => {

    const {_id,title,city,photo,price,featured,reviews} = tour
    const {totalRatintg,avgRating} = CalculateavgRating(reviews);
    

  return (
    <div className="tour__card">
 
{/* TourCard is mapped in the FeatureList */}

        {/* Outer  Rendering from Tour data */}
        <Card>
            {/* Image & Season  */}
            <div className="tour__img">
                <img src={photo} alt="" />
               { featured && <span>Season</span>}
            </div>

       {/* Inner  */}
            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">

                {/* location & Icon */}
                <span className="tour_location d-flex align-items-center gap-1">
                  {/* Props */}
                <i className="ri-map-pin-line"></i> {city}    
                </span>
                  
                   {/* Rating & Icon   ! important */}
                <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-account-circle-line"></i> {avgRating===0?null:avgRating}
                {totalRatintg===0 ? (
                    "Sajal khandelwal"
                ) : (<span>({reviews.length})</span>
                )}
                </span>

                  {/* Transport */}
                <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-train-fill"></i> 
                </span>
                
            </div>

            {/* Title  */}
            <h5 className='tour__title' >
                <Link to ={`/tours/${_id}`}>{title}</Link>  
            </h5>

           {/* Price & BookNow */}
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>₹{price} <span>/per luggage</span></h5>

            <button className='btn booking__btn'><Link to ={`/tours/${_id}`}>Book Now</Link></button>
                </div>

        </CardBody>

        </Card>

       
    </div>
  )
}

export default Tourcard