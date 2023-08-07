const express = require("express"); // require express
const bodyParser = require("body-parser"); // require body parser middleware to handle data (post, put ..)
const mongoose = require("mongoose");

// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/ninjago");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", require("./routes/api")); // require the api and use it

// listen for request
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
