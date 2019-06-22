const express = require("express");

const mainRoutes = require("./routes/index");

const app = express();

app.use(mainRoutes);

server.listen(3000);
