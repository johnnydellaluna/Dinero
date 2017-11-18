var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
// Add in Heroku links
  .goto("/login")
  .type("input#register-username", "jimmyneutron")
  .type("input#register-email", "jimmy@thelab.com")
  .type("input#register-password", "goddard")
  .type("input#register-budget", "10000")
  .click("#register-button")
  .goto("/dashboard")
  .evaluate(function() {
    return document.querySelector(".main-menu");
  })
  .end()
  .catch(function(error) {
    console.error("Unable to register", error);
  });