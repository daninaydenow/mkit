const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    requireed: true,
    ref: "User",
  },
  movieId: {
    type: String,
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
