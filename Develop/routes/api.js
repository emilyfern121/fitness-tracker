const router = require("express").Router();
const db = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    db.find()
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("api/workouts/range", (req, res) => {
    db.find()
      .then(dbData => {
        res.json(dbData;
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then(dbData => {
      res.json(dbData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;