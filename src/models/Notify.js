
const database = require("../helpers/database");
const Sequelize = require("sequelize");

const Notify = database.define("notify", {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  notification: {
    type: Sequelize.STRING,
    allowNull: false,
  },




 
});


Notify.sync({ alter: true }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("User table created");
  }
});

module.exports = Notify;