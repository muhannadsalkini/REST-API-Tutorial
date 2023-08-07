// express routing class

const express = require("express"); // require express
const Ninja = require("../models/ninja"); // import Ninja model
const router = express.Router(); // router object

// get a lost of ninjas from the db
router.get("/ninjas", function (req, res, next) {
  // Ninja.find({}).then(function(ninjas){
  //  res.send(ninjas);
  // });
  Ninja.aggregate()
    .near({
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      },
      maxDistance: 100000,
      spherical: true,
      distanceField: "dis",
    })
    .then(function (ninjas) {
      res.send(ninjas);
    });
});

// add a new ninja to the db
router.post("/ninjas", function (req, res, next) {
  //   var ninja = new Ninja(req.body);
  //   ninja.save(); // save in the database

  // create object and save
  Ninja.create(req.body)
    .then(function (ninja) {
      res.send(ninja); // response with the saved data
    })
    .catch(next);
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    // get the updated ninja and send
    Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
      res.send(ninja);
    });
  });
});

// delete a ninja from the db
router.delete("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja);
  });
});

module.exports = router; // export the roter to import it
