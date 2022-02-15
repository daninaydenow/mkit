const Favourite = require("../models/FavouriteModel");
const asyncHandler = require("express-async-handler");

// @desc Get favourite
// @route GET api/favourite
// @access Private
const getFavourites = asyncHandler(async (req, res) => {
  const favourites = await Favourite.find({ user: req.user.id });
  res.status(200).json(favourites);
});

// @desc Set favourite
// @route POST api/favourite
// @access Private
const setFavourite = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.movieId) {
    res.status(400);
    throw new Error("Please add movie Id");
  }
  console.log(req.body);
  const favourite = await Favourite.create({
    movieId: req.body.movieId,
    user: req.user.id,
  });
  res.status(200).json(favourite);
});

// @desc Delete favourite
// @route Delete api/favourite/:id
// @access Private
const deleteFavourite = asyncHandler(async (req, res) => {
  const favourite = await Favourite.find({ movieId: req.params.id });
  if (!favourite) {
    res.status(400);
    throw new Error("Favourite not found");
  }
  console.log(favourite);
  const deletedFavourite = await Favourite.findByIdAndDelete(favourite[0]._id);
  res.status(200).json(deletedFavourite);
});

module.exports = {
  getFavourites,
  setFavourite,
  deleteFavourite,
};
