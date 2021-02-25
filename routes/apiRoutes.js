const exercise = require("../models/exercise");
const workout = require("../models/workout");

module.exports = function(app) {

  app.get("/api/exercise", function(req, res) {
    res.json(exercise);
  });

  app.get("/api/workouts", function(req, res) {
    res.json(workout);
  });

  // app.get("/api/index", function(req, res) {
  //   res.json(index);
  // });

  // app.post("/api/exercise", function(req, res) {
  //   res.json("TESTING");
  // });


  app.get("/api/workouts/range", function(req, res) {
    db.workout.find().sort({ _id: -1 }).limit(3)
    .populate("exercises")
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
  });

}