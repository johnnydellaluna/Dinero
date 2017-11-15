var db = require("../models");

module.exports = function(app) {
  // CREATE
  app.post("/api/users", function(req, res) {
    db.User
    .create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // UPDATE
  app.put("/api/users", function(req, res) {
    updatedData = req.body;

    db.User
    .update(
      updatedData,
      {
        where: { id: req.body.id }
      }
    )
    .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // DELETE
  app.delete("/api/user/:id", function(req, res) {
    db.User
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // READ
  // ALL USERS
  app.get("/api/users", function(req, res) {
    db.User
    .findAll({
      include: [db.Expenses, db.Income]
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // USER BY ID
  app.get("/api/user/:id", function(req, res) {
    db.User
    .findOne({
      where: {
        id: req.params.id
      },
      include: [db.Expenses, db.Income]
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
};