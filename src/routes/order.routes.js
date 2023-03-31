const {Router} = require("express");
const {createOrder, getAllOrder} = require("../controllers/order.controllers");

const router = Router();


router.post("/api/v1/orders", createOrder)

router.get("/api/v1/orders", getAllOrder)


module.exports = router