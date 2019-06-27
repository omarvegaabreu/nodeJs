//NPM dependencies
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

//created app
const app = express();

const users = [];

//templating engine
app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add user" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User", users: users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

//server
app.listen(3000);
