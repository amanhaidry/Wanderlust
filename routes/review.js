const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const { createReview, deletereview } = require("../controllers/reviews.js");


// post review route
router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(createReview)
);

// delete review route

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deletereview)
);

module.exports = router;
