const Favourite = require("../models/FavouriteModel");

// @desc Get favourite
// @route GET api/favourite
// @access Private
const getFavourites = async (req, res) => {
  const favourites = await Favourite.find({ user: req.user.id });
  res.status(200).json(favourites);
};

// @desc Set favourite
// @route POST api/favourite
// @access Private
const setFavourite = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please adda text field");
  }
  const favourite = await Favourite.create({
    movieId: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(favourite);
};

// @desc Update favourite
// @route Put api/favourite/:id
// @access Private
const updateFavourite = async (req, res) => {
  const favourite = await Favourite.findById(req.params.id);
  if (!favourite) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await favourite.remove();
  res.status(200).json({ id: req.params.id });
};

// @desc Delete favourite
// @route Delete api/favourite/:id
// @access Private
const deleteFavourite = async (req, res) => {
  const favourite = await Favourite.findById(req.params.id);
  if (!favourite) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const deletedFavourite = await Favourite.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedFavourite);
};

module.exports = {
  getFavourites,
  setFavourite,
  updateFavourite,
  deleteFavourite,
};
