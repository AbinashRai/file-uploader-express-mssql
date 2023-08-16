const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "sa", "admin123", {
  host: "ABINASH\\SQLEXPRESS",
  dialect: "mssql",
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();
