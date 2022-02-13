const Favourites = require("../models/goalModel");

// @desc Get goals
// @route GET api/goals
// @access Private
const getFavourites = async (req, res) => {
  const favourites = await Favourites.find();
  res.status(200).json(favourites);
};

// @desc Set goal
// @route POST api/goals
// @access Private
const setFavourite = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please adda text field");
  }
  const favourite = await Favourites.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
};

// @desc Update goal
// @route Put api/goals/:id
// @access Private
const updateFavourite = async (req, res) => {
  const favourite = await Favourites.findById(req.params.id);
  if (!favourite) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await favourite.remove();
  res.status(200).json({ id: req.params.id });
};

// @desc Delete goala
// @route Delete api/goals/:id
// @access Private
const deleteFavourite = async (req, res) => {
  const favourite = await Favourites.findById(req.params.id);
  if (!favourite) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const deletedGoal = await Favourites.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedGoal);
};

module.exports = {
  getFavourites,
  setFavourite,
  updateFavourite,
  deleteFavourite,
};
