import { json } from "express";
import Booking from "../models/Booking.js";

// create new Booking
export const createBooking = async (req, res) => {
 
    const newBooking = new Booking(req.body);
    try {
      const savedBooking = await newBooking.save();
      res
        .status(200)
        .json({ success: "True", message: "Your Tour is Booked from backend", data: savedBooking });
    } catch (err) {
      res.status(200).json({ success: "false", message: "Failed to Book due to Server Issues" });
      console.log(err)
    }  
}

// get single booking
export const getBooking = async (req, res) => {
    const Id = req.params.tourId;
  
    try {
      const book = await Booking.findById(Id);
      res
        .status(200)
        .json({ success: "true", message: "Successfull", data: book });
    } catch (err) {
      res.status(404).json({ success: "true", message: "Not Found" });
    }
  };

  // get All booking
export const getAllBooking = async (req, res) => {
    
    try {
      const books = await Booking.find();
      res
        .status(200)
        .json({ success: "true", message: "Successfull", data: books });
    } catch (err) {
      res.status(500).json({ success: "true", message: "Not Found your Bookings" });
    }
  };