import React, { useState, useContext } from "react";
import "./Create.css";
import { BASE_URL } from "../Utilis/config.js";
import { AuthContext } from "../context/AuthContext.js";

const Create = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    
    userId: user && user._id,
    userEmail: user && user.email,
    title: "",
    city: "",
    contact: "",
    client: "",
    distance: "",
    maxGroupSize: "",
    price: "",
    photo: "/tour-images/tour-img04.jpg",
    date: "",
    desc: "",
    reviews: [],
    featured: false,
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
        return;
      }

      const res = await fetch(`${BASE_URL}/tours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
    } catch (err) {
      console.log("Error:", err.message);
      alert("Failed to create tour");
    }
  };

  return (
    <div className="createForm">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="client">Client</label>
            <input
              type="text"
              className="form-control"
              id="client"
              onChange={handleChange}
              placeholder="Client"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={handleChange}
              placeholder="Title"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              onChange={handleChange}
              placeholder="City"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={handleChange}
              placeholder="Address"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              className="form-control"
              id="contact"
              onChange={handleChange}
              placeholder="Contact"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="distance">Distance</label>
            <input
              type="number"
              className="form-control"
              id="distance"
              onChange={handleChange}
              placeholder="Distance"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              onChange={handleChange}
              placeholder="Date"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="maxGroupSize">Max Group Size</label>
            <input
              type="number"
              className="form-control"
              id="maxGroupSize"
              placeholder="Max Group Size"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
              onChange={handleChange}
            />
          </div>

          {/* <div className="form-group col-md-6">
            <label htmlFor="reviews">Reviews</label>
            <input
              type="text"
              className="form-control"
              id="reviews"
              placeholder="Reviews"
              onChange={handleChange}
            />
          </div> */}
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control"
            id="desc"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="featured"
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.checked })
            }
          />
          <label className="form-check-label" htmlFor="featured">
            Featured
          </label>
        </div>

        <button
          onClick={handleCreate}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
