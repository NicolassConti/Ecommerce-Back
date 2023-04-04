const {Router} = require("express");
const {createOrder, getAllOrder, getOrderUsers} = require("../controllers/order.controllers");

const router = Router();


router.post("/api/v1/orders", createOrder)

router.get("/api/v1/orders", getAllOrder)

router.get("/api/v1/orders/:id", getOrderUsers)


module.exports = router