const express = require("express");

//created app
const app = express();

//templating engine
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add user" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User" });
});

app.post("/add-user", (req, res, next) => {
  res.redirect("/ rs");
});

//server
app.listen(3000);
