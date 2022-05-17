const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const verifyToken = require("../middleware/verify");
const Order = require("../models/Order");
const User = require("../models/User");
const stripe = Stripe("sk_test_51K1YfRDso4qjZkGZhu5KmvnJqj7lCsy6akm4453blwJ63w9wyNviU6X2sNMcW8Jkzjrl1WUmV7MoNrp0vNIsPAUE009PncGjPI");

//create a router to add new order
router.post("/order/add", verifyToken, async (req, res) => {
  try {
    req.body.userId = req.id;
    const data = await Order.create(req.body);

    const user = await User.findOne({
      where: {
        id: req.id,
      },
      raw: true,
    });

    const address = await Address.findOne({
      where: {
        userId: req.id,
      },
      raw: true,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      payment_method_types: ["card"],
      description: "Example charge",
    });

    console.log(paymentIntent);
    res.send({ data, client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

//get all users orders
router.get("/orders", verifyToken, async (req, res) => {
  try {
    const data = await Order.findAll({
      where: {
        userId: req.id,
      },
      raw: true,
    });
    res.send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
});




//create a post request to cancel order
router.post("/order/cancel/:id", verifyToken, async (req, res) => {
  try {
    const data = await Order.update(
      {
        status: "cancelled",
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
