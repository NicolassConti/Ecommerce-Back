const {Router} = require("express");
const {createdCart, getAllCart, addProductToCart} = require("../controllers/cart.controllers");
const { createCartValidator } = require("../validator/carts.validator");

const router = Router();


router.get("/api/v1/cart", getAllCart)

router.post("/api/v1/cart",createCartValidator, createdCart);

router.post("/api/v1/cart/add-product", addProductToCart);



module.exports = router;