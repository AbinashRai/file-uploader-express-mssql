const express = require("express");
const cors = require("cors");
const db = require("./app/models");
require("./app/config/db");

const app = express();

// Middleware for handling CORS
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Test Sequelize database connection

// Continue setting up the Express routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

// Set port and start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
