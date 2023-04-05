const {Router} = require("express");
const {getAllProductInOrder, createdProductInOrder } = require("../controllers/ProductInOrder.controllers");
const { createProductInOrdersValidator } = require("../validator/productInOrders.validator");


const router = Router();


router.get("/api/v1/productInOrder", getAllProductInOrder)

router.post("/api/v1/productInOrder",createProductInOrdersValidator , createdProductInOrder);



module.exports = router;