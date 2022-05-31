const Cars = require("../models/Cars");
const express = require("express");
const { Op } = require("sequelize");
const uploadImage = require("../helpers/upload");
const router = express.Router();

//create a route named /product/add to add a new product
router.post("/car/add", async function (req, res) {
    try {
      const file = req.files;
      const image = await uploadImage({
        originalname: file.file.name,
        buffer: file.file.data,
      });
  
      console.log(image);
  
      req.body.image = image;
     
      const rental = await Cars.create(req.body);
      res.send(rental);
      
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });
  

//create a route named /product/list to list all products
router.get("/car/list", async function (req, res) {
  try {
    const adds = await Cars.findAll();
    res.send(adds);
  } catch (error) {
    res.send(error);
  }
});

//create a route to delete a product
router.get("/rental/delete/:id", async function (req, res) {
  try {
    const rental = await Add.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.send("Add deleted successfully");
  } catch (error) {
    res.send(error);
  }
});



router.post("/rental/update/feature/:id", async function (req, res) {
  try {
    const rental = await Add.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.send(rental);
  } catch (error) {
    res.send(error);
  }
});


//create a route to modify the product
router.post("/rental/update/:id", async function (req, res) {
  try {
    const file = req.files;
    const image = await uploadImage({
      originalname: file.file.name,
      buffer: file.file.data,
    });

    console.log(image);

    req.body.image = image;

    const rental = await Add.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.send(rental);
  } catch (error) {
    res.send(error);
  }
});


router.get("/rental/:id", async function (req, res) {
  try {
    const rental = await Add.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.send(rental);
  } catch (error) {
    res.send(error);
  }
});

//get all products fro, array of ids
router.get("/rentals/:ids", async function (req, res) {
  try {
    const rentals = await Add.findAll({
      where: {
        id: {
          [Op.or]: req.params.ids.split(","),
        },
      },
    });
    return res.send(rentals);
  } catch (error) {
    res.send(error);
  }
});

//route to get products/feature
router.get("/rentals/feature/get", async (req, res) => {
  try {
    const rentals = await Add.findAll({
      where: {
        feature: 1,
      },
    });

    console.log("🚀 ~ file: rentals.js ~ line 107 ~ rentals", rentals);

    return res.send(rentals);
  } catch (error) {
    res.send(error);
  }
});

router.get('/rental', (req, res) => 
  Add.findAll()
    .then(ride => res.render('ride', {
      ride
      }))
    .catch(err => res.render('error', {error: err})));
router.get('/search', (req, res) => {
  let { term } = req.query;
  Add.findAll({ where: { address : { [Op.like]: '%' +term+ '%' } } })
    .then(ride => res.render('ride', { ride }))
    .catch(err => res.render('error', {error: err}));
});






module.exports = router;