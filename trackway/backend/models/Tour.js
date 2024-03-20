import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
   
    },

    date :{
      type: String,
     
    },
    
    city: {
      type: String,
     
    },
    address: {
      type: String,
     
    },
    distance: {
      type: Number,
   
    },


    desc: {
      type: String,
    
    },

    client: {
      type: String,
     
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
