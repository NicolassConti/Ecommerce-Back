const {Router} = require("express");
const {getAllProductInOrder, createdProductInOrder } = require("../controllers/ProductInOrder.controllers")


const router = Router();


router.get("/api/v1/productInOrder", getAllProductInOrder)

router.post("/api/v1/productInOrder", createdProductInOrder);



module.exports = router;