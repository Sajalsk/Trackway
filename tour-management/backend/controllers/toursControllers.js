import Tour from "../models/Tour.js";

///Create NewTour

export const CreateTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      sucess: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({ sucess: false, message: "Failed to Create" });
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
      sucess: true,
      message: "Successfully Updated",
      data: UpdateTour,
    });
  } catch (err) {
    res.status(500).json({ sucess: false, message: "Failed to Update" });
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
      sucess: true,
      message: "Successfully Founded",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({ sucess: false, message: "Not Found" });
  }
};

// GetAll Tour

export const GetAllTour = async (req, res) => {
  // For Pagination
  const page = parseInt(req.query.page);

  console.log(page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8) // Counting logic
      .limit(8);

    res.status(200).json({
      sucess: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ sucess: false, message: "Not Found" });
  }
};

// Get Tour by Search

export const GetTourbySearch = async (req, res) => {
  //here i for case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      sucess: true,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(200).json({
      sucess: false,
      message: "Not found",
    });
  }
};

// GetFeatured Tour

export const GetFeatured = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      sucess: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ sucess: false, message: "Not Found" });
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
