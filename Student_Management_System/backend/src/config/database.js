const { sequelize, Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/student_management.db",
  logging: false,
});

//for test the db connection

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database Connection established successfully");
  } catch (error) {
    console.error("Unable to connect to the databse:", error);
  }
}

testConnection();

module.exports = sequelize;
