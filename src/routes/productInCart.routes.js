const {Router} = require("express");
const {createdProductInCart, getAllProductInCart} = require("../controllers/productInCart.controllers");

const router = Router();


router.get("/api/v1/productInCart", getAllProductInCart)

router.post("/api/v1/productInCart", createdProductInCart);



module.exports = router;