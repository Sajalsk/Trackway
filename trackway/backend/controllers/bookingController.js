import Booking from "../models/Booking.js";

// create new Booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
      const savedBooking = await newBooking.save();
      res
        .status(200)
        .json({ sucess: "true", message: "Your Tour is Booked", data: savedBooking });
    } catch (err) {
      res.status(200).json({ sucess: "false", message: "Failed to Book due to Server Issues" });
    }
}

// get single booking
export const getBooking = async (req, res) => {
    const Id = req.params.tourId;
  
    try {
      const book = await Booking.findById(Id);
      res
        .status(200)
        .json({ sucess: "true", message: "Successfull", data: book });
    } catch (err) {
      res.status(404).json({ sucess: "true", message: "Not Found" });
    }
  };

  // get All booking
export const getAllBooking = async (req, res) => {
    
    try {
      const books = await Booking.find();
      res
        .status(200)
        .json({ sucess: "true", message: "Successfull", data: books });
    } catch (err) {
      res.status(500).json({ sucess: "true", message: "Not Found your Bookings" });
    }
  };