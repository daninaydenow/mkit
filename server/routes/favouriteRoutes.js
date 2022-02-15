const express = require("express");
const router = express.Router();
const {
  getFavourites,
  setFavourite,
  deleteFavourite,
} = require("../controllers/favouriteController");

const protect = require("../middleWare/authMiddleware");

router.route("/").get(protect, getFavourites).post(protect, setFavourite);
router.route("/:id").post(protect, deleteFavourite);

module.exports = router;
