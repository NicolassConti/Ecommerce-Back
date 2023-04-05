const {  Router } = require("express");
const {createProduct, getAllProduct, updateProduct, getProductId} = require("../controllers/product.controllers");
const { createProductValidator } = require("../validator/products.validator");


const router = Router();

router.get("/api/v1/products", getAllProduct);

router.get("/api/v1/products/cart/:id", getProductId);

router.post("/api/v1/products",createProductValidator, createProduct);

router.put("/api/v1/products/:id", updateProduct)



module.exports = router;