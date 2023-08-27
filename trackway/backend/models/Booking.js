import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
    },
    userEmail: {
      type: String,
     
    },
    tourName: {
        type: String,
       
       
      },
    fullName: {
      type: String,

    },
    guestSize: {
        type: Number,
       
      },
      Phone: {
        type: Number,
      
      },
      bookAt :{
        type :Date
      }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
