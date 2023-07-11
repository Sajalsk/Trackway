import React from 'react'
import Slider from 'react-slick';
import ava01 from "../../assets//images/ava-1.jpg"
import ava02 from "../../assets//images/ava-2.jpg"
import ava03 from "../../assets//images/ava-3.jpg"

const Test = () => {

    const settings  ={
          dots: true,
          infinite:true,
          autoplay:true,
          speed:1000,
          swipetoSlide:true,
          autoplaySpeed:2000,
          slidetoShow:3,

          responsive :[
            {
                breakpoint:992,
               settings: {
                    dots: true,
                   infinite:true,
                   slidetoShow:3,
                   swipetoSlide:true,

                },
            },

            {
                breakpoint:992,
               settings: {
                    dots: true,
                   infinite:true,
                   slidetoShow:3,
                   swipetoSlide:true,

                },
            },
            {
                breakpoint:992,
               settings: {
                    dots: true,
                   infinite:true,
                   slidetoShow:3,
                   swipetoSlide:true,

                },
            }
          ]
    }

  return <Slider {...settings}>
 <div className="test py-4 px-3">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus exercitationem vel nemo repellat beatae facere dignissimos tenetur quis odit libero, tempora recusandae sunt. Odio, suscipit tempora perspiciatis error nihil autem ea labore itaque sapiente?</p>

    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='wt-25 h-25 rounded-2' alt="" />
        <div >
            <h6 className="mb-0 mt-3" >Sajal Khandelwal</h6>
            <p>Customers</p>
        </div>  
    </div>
 </div>

 <div className="test py-4 px-3">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus exercitationem vel nemo repellat beatae facere dignissimos tenetur quis odit libero, tempora recusandae sunt. Odio, suscipit tempora perspiciatis error nihil autem ea labore itaque sapiente?</p>

    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className='wt-25 h-25 rounded-2' alt="" />
        <div >
            <h6 className="mb-0 mt-3" >Raj</h6>
            <p>Startup</p>
        </div>  
    </div>
 </div>

 <div className="test py-4 px-3">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus exercitationem vel nemo repellat beatae facere dignissimos tenetur quis odit libero, tempora recusandae sunt. Odio, suscipit tempora perspiciatis error nihil autem ea labore itaque sapiente?</p>

    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className='wt-25 h-25 rounded-2' alt="" />
        <div >
            <h6 className="mb-0 mt-3" >Rajeev </h6>
            <p>Business</p>
        </div>  
    </div>
 </div>

 <div className="test py-4 px-3">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus exercitationem vel nemo repellat beatae facere dignissimos tenetur quis odit libero, tempora recusandae sunt. Odio, suscipit tempora perspiciatis error nihil autem ea labore itaque sapiente?</p>

    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='wt-25 h-25 rounded-2' alt="" />
        <div >
            <h6 className="mb-0 mt-3" >Sajal Khandelwal</h6>
            <p>Customers</p>
        </div>  
    </div>
 </div>

 <div className="test py-4 px-3">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus exercitationem vel nemo repellat beatae facere dignissimos tenetur quis odit libero, tempora recusandae sunt. Odio, suscipit tempora perspiciatis error nihil autem ea labore itaque sapiente?</p>

    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='wt-25 h-25 rounded-2' alt="" />
        <div >
            <h6 className="mb-0 mt-3" >Sajal Khandelwal</h6>
            <p>Customers</p>
        </div>  
    </div>
 </div>

 <div className="test py-4 px-3">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias delectus exercitationem vel nemo repellat beatae facere dignissimos tenetur quis odit libero, tempora recusandae sunt. Odio, suscipit tempora perspiciatis error nihil autem ea labore itaque sapiente?</p>

    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='wt-25 h-25 rounded-2' alt="" />
        <div >
            <h6 className="mb-0 mt-3" >Sajal Khandelwal</h6>
            <p>Customers</p>
        </div>  
    </div>
 </div>

  </Slider> 
   
  
}

export default Test