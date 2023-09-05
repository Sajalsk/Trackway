import Tour from "../models/Tour.js";
import Review from "../models/Review.js";


// Create Review 

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();
    // after creating a new Review now updating the review of array
    await Tour.findByIdAndUpdate(tourId, {
      $push: { review: savedReview._id },
    });

    res
      .status(200)
      .json({ sucess: "true", message: "Review Submitted", data: savedReview });
      console.log(newReview);
  } catch (err) {
    res.status(200).json({ sucess: "false", message: "Failed to Submit" });
  }
};
