const express = require("express");
const router = express.Router();
const {
  getFavourites,
  setFavourite,
  updateFavourite,
  deleteFavourite,
} = require("../controllers/favouriteController");

const protect = require("../middleWare/authMiddleware");

router.route("/").get(protect, getFavourites).post(protect, setFavourite);
router.route("/:id").delete(protect, deleteFavourite).put(updateFavourite);

module.exports = router;
