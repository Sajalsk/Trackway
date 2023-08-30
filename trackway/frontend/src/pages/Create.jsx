import React, { useState,useContext} from "react";
import './Create.css'
import { BASE_URL } from "../Utilis/config.js"
import { AuthContext } from "../context/AuthContext.js"

const Create = () => {

  const {user} = useContext(AuthContext);

  const [CreateTour, setCreateTour] = useState({

    userId: user && user._id,
    userEmail:user && user.email,
    title : "",
    city:"",
    address:"",
    // photo:"",
    distance:"",
    maxGroupSize:"",
    price:"",
    photo:"/tour-images/tour-img04.jpg",
   
  });

  const handleChange = (e) => {
    setCreateTour((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log("In here setcreatetour");
    console.log(setCreateTour);
  };

  const handleCreate = async (e) => {

    e.preventDefault();

    try {
      if(!user|| user===undefined || user===null) {
        alert("Please Sign in")
      }
     
          const res  = await fetch(`${BASE_URL}/tours`,{
          method:'post',
          headers:{
            'content-type':'application/json'
          },
          credentials:'include',
          body:JSON.stringify(CreateTour) 
         })
         
         const result = await res.json();
         if(!res.ok)  {
         return alert(result.message)
         } 
         console.log("In try create frontend")
         
    } catch (err) {
      console.log("Error in here frontend")
      alert(err.message)
    }
  };

  return (
   <>
   <div className='CreateFrom'>
   <form >
  <div className="form-row">

    <div className="form-group col-xs-2">
      <label htmlFor="Title">Title</label>
      <input type="text" className="form-control" id="title"  onChange={handleChange} placeholder="Title"/>
    </div>

    <div className="form-group col-xs-2">
      <label htmlFor="inputPassword4">City</label>
      <input type="text" className="form-control" id="city"  onChange={handleChange} placeholder="City"/>
    </div>

  </div>

  <div className="form-group col-xs-2 ">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="address" onChange={handleChange}
    placeholder="Sydeny , Australia"/>
  </div>

  <div className="form-group ">
    <label htmlFor="inputAddress2">Distance</label>
    <input type="number" className="form-control" id="distance"  onChange={handleChange} placeholder="Distance"/>
  </div>

  <div className="form-row col-xs-2">
    <div className="form-group col-xs-2">
      <label htmlFor="MaxGroup">MaxGroup</label>
      <input type="number" className="form-control" id="maxGroupSize" onChange={handleChange} />
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="Description">Description</label>
      <input type="text" className="form-control"  onChange={handleChange} id="desc"/>
    </div>

    <div className="form-group col-xs-2">
      <label htmlFor="price">Cost</label>
      <input type="number" className="form-control" onChange={handleChange} id="price"/>
    </div>
 
    {/* Image  */}
    
    <div className="form-group col-md-4 upload-form">
    <label htmlFor="photo">Choose an Image</label>
    <input type="file" className="form-control" id="photo" onChange={handleChange}/>
    </div>


    {/* <div className="form-group col-md-4">
      <label htmlFor="inputState">Add Image</label>
      <select id="Image" className="form-control">
        <option selected>Drop Here</option>
        <option>Add Files</option>
        <option>
        <label htmlFor="image">Choose an image:</label>
        <input type="file" name="image"  onChange={handleChange} id="image" accept="image/*"/>
        <br/>
        <input type="submit" value="Upload"/>
        </option>
      </select>
    </div>
   */}

  </div>

  <div className="form-group">
  </div>

  <button onClick={handleCreate} type="submit" onChange={handleChange} className="btn btn-primary">
    Create</button>

</form>
</div>

<div className='mb-70'></div>

</>
  )
}

export default Create