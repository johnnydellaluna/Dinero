var db = require("../models");

// CREATE a new user
module.exports = function(app) {

app.post("/api/user", function(req, res) {
    db.User.create(req.body)
        .then(function(dbUser) {
            res.json(dbUser);
        })
});

// Find and READ individual user info

app.get("/api/user/:id", function(req, res){
	db.user.findAll({
		where: {
			id: req.params.id
		}

	}).then(function(dbUser) {
		console.log(dbUser)
	})

});
};