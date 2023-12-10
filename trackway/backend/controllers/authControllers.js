import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//User Registration

export const register = async (req, res) => {
  try {
    
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
   
    const newUser = new User({
      
      username: req.body.username,
      email: req.body.email,
      password: hash,
      card :req.body.card,

    })
   
    await newUser.save();
    console.log("above user");

    res.status(200).json({ success: true, message: "Succesfully Created" });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Not Created. Try again" });
  }
};

// User Login

export const login = async (req, res) => { // async function 

  const email = req.body.email;
  
  try {
    
    const user = await User.findOne({ email }); // query to find the credential and store in user & 
        // and how is comparing with the password;

        console.log(user);
        // console.log(password);

    // If user doesn't Exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // if user exist checking for correct password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    )

    // if incorrect password
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token into the browser cookies and send response to client
    
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "Successfully Login",
        token,
        data: { ...rest },
        role,
      });
      
     
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, message: "Failed to Login due to some errors" });
  }
};
