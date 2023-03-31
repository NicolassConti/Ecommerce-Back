const {Router} = require("express");
const {createdCart, getAllCart} = require("../controllers/cart.controllers");

const router = Router();


router.get("/api/v1/cart", getAllCart)

router.post("/api/v1/cart", createdCart);



module.exports = router;