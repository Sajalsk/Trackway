// Importing all the middleware

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";


// Importing all the modules


import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";


// Configuring .env files
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Setting up the cors;

const corsOptions = {
  origin: true,
  credentials: true,
};

//Database connection

mongoose.set("strictQuery", false);

const connect = async () => {
  
  try {
    await mongoose.connect(process.env.MONGO_URI , {
      useNewUrlParser: "true",
      useUnifiedTopology: "true"
    });  
    console.log("Connected to Database Successfully");
  } catch (err) {
    console.log(err);
    console.log("Failure Detected in Connection to Database");
  }
};

//middlewares declarations

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Specifying Routes 

app.get("/",(req,res)=>{
  res.send("Postman is working in Trackway backend");
});


app.use("/api/v1/auth",  authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review",reviewRoute);
app.use("/api/v1/booking",bookingRoute);


// Port Listening

app.listen(port, () => {
  connect();
  // console.log(process.env.MONGO_URI);
  console.log("Server Listening on Port", port);
});
