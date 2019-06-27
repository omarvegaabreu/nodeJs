const path = require("path");

const express = require("express");

const router = express.Router();

app.set("view engine", "ejs");
app.set("views", "views");

router.get("/", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });

  //res.sendFile(path.join(__dirname, "..", "views", "users.ejs"));
});

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.ejs"));
});

module.exports = router;
