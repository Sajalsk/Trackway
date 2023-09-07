import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
     // required: true,
      unique: true,
    },

    date :{
      type: String,
      format: "%d-%m-%y",
    },
    
    city: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    distance: {
      type: Number,
      //  required: true,
    },

    // photo: {
    //   // data: Buffer,
    //   type: String,
    //   // required: true,
    // },
    
    photo: {
      data: Buffer, 
      type: String,
    },

    desc: {
      type: String,
      // required: true,
    },

    client: {
      type: String,
      // required: true,
    },

    price: {
      type: Number,
      // required: true,
    },
    maxGroupSize: {
      type: Number,
      // required: true,
    },
    contact :{
      type: Number,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: [
      {
        type: String,
      default: false,
    },

  ],

   
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
