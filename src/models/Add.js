//create a sequelize model which has fields id, description, price, image, name

const database = require("../helpers/database");
const Sequelize = require("sequelize");

const Add = database.define("rental", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cartype: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cardriven: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  carmileage: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
 
  carnumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  carinsurance: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  feature: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

 
});


Add.sync({ alter: true }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("User table created");
  }
});

module.exports = Add;
