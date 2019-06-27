const express = require("express");

//created app
const app = express();

app.get('/', (req, res, next) => {
  res.render();
});

app.get('users', (req, res, next) {
  res.render();
});

app.post('/add-user', (req, res, next) => {
  res.redirect('/users');
});


//server
app.listen(3000);
