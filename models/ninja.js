const mongoose = require("mongoose");
const Schema = mongoose.Schema; // mongoose schema

// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
//   },

// creat geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number], // array of numbers
    index: "2dsphere", // type of map
  },
});

// creat ninja Schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  geometry: GeoSchema,
});

// create ninja module
const Ninja = mongoose.model("ninja", NinjaSchema);

// export module
module.exports = Ninja;
