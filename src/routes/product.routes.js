const {  Router } = require("express");
const {createProduct, getAllProduct, updateProduct} = require("../controllers/product.controllers");


const router = Router();

router.get("/api/v1/products", getAllProduct);

router.post("/api/v1/products", createProduct);

router.put("/api/v1/products/:id", updateProduct)


module.exports = router;