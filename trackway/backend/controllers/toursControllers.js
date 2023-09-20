import Tour from "../models/Tour.js";

///Create NewTour

export const CreateTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
    
  } catch (err) {
    console.log(err);
    console.log(res);
    console.log("In create tour Catch")
    res.status(500).json({ success: false, message: "Data created Successfully catch" });
  }
};

// Update Tour
export const UpdateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const UpdateTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: UpdateTour,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Update" });
  }
};

// Delete Tour

export const DeleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(501).json({ success: false, message: "Failed to Delete" });
  }
};

// GetSingle Tour

export const GetSingleTour = async (req, res) => {
  const id = req.params.id;

  try {

    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully Founded in Single",
      data: tour,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, message: "Not Found for search getSingle Tour" });
  }
};


// Get Tour by Search

export const GetTourbySearch = async (req, res) => {
  //here i for case sensitive
//  const city = new RegExp(req.query.city, "i");
   const title = req.query.title;
  //  const date = req.query.date;
   
 //  const distance = parseInt(req.query.distance);
 //  const maxGroupSize = parseInt(req.query.maxGroupSize);
 console.log("title.", title);
//  console.log("date.", date);
 
  try {
    const tour = await Tour.find({
      title, 
    /*{date} */
   //   distance: { $gte: distance },
    //  maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully in Search",
      data: tour, // Include the search results in the response
    });
  //  console.log("tryCity." , city);
    // console.log(res)
  } catch (err) {
    
    res.status(404).json({
      success: false,
      message: "Not Found Searched tours",
    });
    
  }
};

// GetAll Tour

export const GetAllTour = async (req, res) => {
  // For Pagination
  const page = parseInt(req.query.page);

  // console.log(page);
  
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8) // Counting logic
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found GetAllTour" });
  }
};

// GetFeatured Tour

export const GetFeatured = async (req, res) => {
  try {
    
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found GetFeatured" });
  }
};

// Get Tour counts

export const GetTourCount = async (req, res) => {

  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};