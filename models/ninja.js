const mongoose = require("mongoose");
const Schema = mongoose.Schema; // mongoose schema

// creat ninja Schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    typpe: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  // add in geo location
});

// create ninja module
const Ninja = mongoose.model("ninja", NinjaSchema);

// export module
module.exports = Ninja;
