//create a sequelize model which has fields id, description, price, image, name

const database = require("../helpers/database");
const Sequelize = require("sequelize");

const Account = database.define("account", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bank: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  accountno: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  transitno: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  institutionno: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
 
  carinsurance: {
    type: Sequelize.STRING,
    allowNull: true,
  },

 
});


Account.sync({ alter: true }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("User table created");
  }
});

module.exports = Account;
