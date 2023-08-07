// express routing class

const express = require("express"); // require express
const Ninja = require("../models/ninja"); // import Ninja model
const router = express.Router(); // router object

// get a lost of ninjas from the db
router.get("/ninjas", function (req, res) {
  res.send({ type: "GET" });
});

// add a new ninja to the db
router.post("/ninjas", function (req, res) {
  //   var ninja = new Ninja(req.body);
  //   ninja.save(); // save in the database

  // create object and save
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja); // response with the saved data
  });
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res) {
  res.send({ type: "PUT" });
});

// delete a ninja from the db
router.delete("/ninjas/:id", function (req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router; // export the roter to import it
