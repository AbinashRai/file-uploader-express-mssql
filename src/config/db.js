const { Sequelize } = require("sequelize");
const dbConfig = require("./db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: "localhost",
  dialect: "mssql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize
  .sync({ force: true })
  .then(() => console.log("modules are syncronized"))
  .catch((error) => console.log(error));

module.exports = sequelize;
