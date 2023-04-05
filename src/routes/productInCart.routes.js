const {Router} = require("express");
const {createdProductInCart, getAllProductInCart} = require("../controllers/productInCart.controllers");
const { createProductInCartValidator } = require("../validator/productInCarts.validator");

const router = Router();


router.get("/api/v1/productInCart", getAllProductInCart)

router.post("/api/v1/productInCart", createProductInCartValidator , createdProductInCart);



module.exports = router;