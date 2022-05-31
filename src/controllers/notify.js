const Notify = require("../models/Notify");
const express = require("express");
const { Op } = require("sequelize");
const uploadImage = require("../helpers/upload");
const router = express.Router();

//create a route named /product/add to add a new product
router.post("/notify/add", async function (req, res) {
    try {
   
     
      const notify = await Notify.create(req.body);
      res.send(notify);
      
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });


  router.get("/notify/list", async (req, res) => {
    try {
      const notify = await Notify.findAll();
      res.send(notify);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  router.get("/notify/:id", async function (req, res) {
    try {
      const notify = await Notify.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.send(notify);
    } catch (error) {
      res.send(error);
    }
  });


  router.post("/notify/update/:id", async function (req, res) {
    try {
      
        const { notify } = req.body;
  
        await Notify.update(
            {
                notification: notify,
            
              
              //profileImage: image,
            },
            {
              where: {
                id: req.params.id,
              },
            }
          );
      
          res.send({ message: "User updated successfully" });
        } catch (e) {
          res.status(400).send(e.message);
        }
      });


      router.get("/notify",  async (req, res) => {
        try {
          const notify = await Notify.findOne({
            where: {
              id: req.params.id,
            },
          });
      
    
      
          res.send(notify);
        } catch (e) {
          res.status(400).send(e.message);
        }
      });

  module.exports = router;