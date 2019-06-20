const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("THIS IS USERS IN THE WEBSITE!");
  res.send("<h1>THIS IS USERS ON THE WEBSITE</h1>");
});

app.use("/", (req, res, next) => {
  console.log("THIS IS ROOT IN THE WEBSITE!");
  res.send("<h1>THIS IS ROOT ON THE WEBSITE</h1>");
});

app.listen(3000);
