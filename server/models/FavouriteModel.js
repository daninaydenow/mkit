const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    requireed: true,
    ref: "User",
  },
  favourites: {
    type: Object,
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
