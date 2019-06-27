const express = require("express");

//created app
const app = express();

//templating engine
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add users" });
});

app.get("/users", (req, res, next) => {
  res.render("user", { pageTitle: "User" });
});

app.post("/add-user", (req, res, next) => {
  res.redirect("/users");
});

//server
app.listen(3000);
