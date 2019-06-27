//NPM dependencies
const express = require("express");
const bodyParser = require("body-parser");

//created app
const app = express();

const users = [];

//templating engine
app.set("view engine", "pug");
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
