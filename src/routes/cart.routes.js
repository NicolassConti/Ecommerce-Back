const {Router} = require("express");
const {createdCart, getAllCart, addProductToCart} = require("../controllers/cart.controllers");

const router = Router();


router.get("/api/v1/cart", getAllCart)

router.post("/api/v1/cart", createdCart);

router.post("/api/v1/cart/add-product", addProductToCart);



module.exports = router;