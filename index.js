const express = require("express"); // require express
const bodyParser = require("body-parser"); // require body parser middleware to handle data (post, put ..)
const mongoose = require("mongoose");

// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/ninjago");
mongoose.Promise = global.Promise;

// express.static midleware to run the app on frontend
app.use(express.static("public"));

app.use(bodyParser.json()); // middleware

app.use("/api", require("./routes/api")); // require the api and use it

//error handling middleware
app.use(function (err, req, res, next) {
  //   console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for request
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
