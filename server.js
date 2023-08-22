const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./src/models");
const initRoutes = require("./src/routes/web");

global.__basedir = __dirname;

// Middleware for handling CORS
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = 8080; // Changed the port to 8080
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
