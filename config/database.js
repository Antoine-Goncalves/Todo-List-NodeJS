const Sequelize = require("sequelize");

module.exports = new Sequelize("todolist", "todolist", "password", {
  host: "localhost",
  dialect: "postgres"
});
