const express = require("express");
const router = express.Router();
const {
  getFavourites,
  setFavourite,
  updateFavourite,
  deleteFavourite,
} = require("../controllers/favouriteController");

router.route("/").get(getFavourites).post(setFavourite);
router.route("/:id").delete(deleteFavourite).put(updateFavourite);

module.exports = router;
