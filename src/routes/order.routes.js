const {Router} = require("express");
const {createOrder, getAllOrder, getOrderUsers} = require("../controllers/order.controllers");
const { createOrderValidator } = require("../validator/orders.validator");

const router = Router();


router.post("/api/v1/orders", createOrderValidator , createOrder)

router.get("/api/v1/orders", getAllOrder)

router.get("/api/v1/orders/:id", getOrderUsers)


module.exports = router