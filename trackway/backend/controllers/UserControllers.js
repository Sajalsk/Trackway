import User from '../models/User.js'

///Create NewUser

export const CreateUser = async (req,res)=>{
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res 
          .status(200)
          .json({
            sucess:true,
            message:"Successfully Created",
            data :savedUser
          });
    }  catch(err) {
        res
        .status(500)
        .json ({sucess:false ,message:"Failed to Create"});
    }
};

// Update User 

export const UpdateUser =async (req,res)=>{
  const id = req.params.id;
  
  try{
       const UpdateUser = await User.findByIDAndUpdate(
        id, {
          $set :req.body,
        },
        {new :true}
       );

       res.status(200).json({
        sucess:true,
        message:"Successfully Updated",
        data :UpdateUser,
       })
  }
  catch(err){
    res
    .status(500)
    .json ({sucess:false ,message:"Failed to Update"});
}
};

// Delete User 

export const DeleteUser =async (req,res)=>{
  const id = req.params.id;
  try{
       await User.findByIDAndDelete(id);

       res.status(200).json({
        sucess:true,
        message:"Successfully Deleted",
        
       })
  }
  catch(err){
    res
    .status(501)
    .json ({sucess:false ,message:"Failed to Delete"});
}
};

// GetSingle User 

export const GetSingleUser =async (req,res)=>{
  const id = req.params.id;

  try{
      const user= await User.findByID(id);

       res.status(200).json({
        sucess:true,
        message:"Successfully Founded",
        data : user,
        
       })
  }
  catch(err){
    res
    .status(404)
    .json ({sucess:false ,message:"Not Found"});
}
};

// GetAll User 

export const GetAllUser =async (req,res)=>{
 
  console.log(page);
  try{
      const users= await User.find({})
    

       res.status(200).json({
        sucess:true,
        message:"Successfully",
        data : users,
        
       })
  }
  catch(err){
    res
    .status(404)
    .json ({sucess:false ,message:"Not Found"});
}
};

