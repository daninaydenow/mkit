const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  favourites: {
    type: Object,
  },
});

module.exports = mongoose.model("Favourites", favouriteSchema);
