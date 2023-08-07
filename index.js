const express = require("express"); // require express

// set up express app
const app = express();

app.use("/api", require("./routes/api")); // require the api and use it

// listen for request
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
