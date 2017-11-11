var db = require("../models");

module.exports = function(app) {

    // Create a new expense list
app.post("/api/expenses", function(req, res) {
    db.Expenses.create(req.body)
    .then(function(dbExpenses) {
        res.json(dbExpenses);
    });
});

// Finds and READ all cards for the user and displays spent_amount

app.get("/api/cards", function(req, res) {
    db.expenses.findAll({
        include: [db.User],
    	order: [
            ["spent_amount", "DESC"]
        ]

    }).then(function(dbExpenses) {
        res.json(dbExpenses)
    })
});

// Finds all categories for the user and displays with spent_amount

app.get("/api/categories", function(req, res) {
    db.expenses.findAll({
        include: [db.User],
        order: [
            ["spent_amount", "DESC"]
        ]
    }).then(function(dbExpenses) {
        res.json(dbExpenses)
    })
})
};

// Updates expenses by category name, card type, and spent amount