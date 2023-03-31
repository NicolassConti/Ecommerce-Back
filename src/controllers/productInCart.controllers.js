const productInCartServices = require("../services/productInCart.services");



const createdProductInCart = async(req, res , next) =>{
    try {
        const newProductInCart = req.body
        const result = await productInCartServices.create(newProductInCart)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
const getAllProductInCart = async(req, res, next) => {
    try {
        const allProductInCart = await productInCartServices.getAll()
        res.json(allProductInCart)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdProductInCart,
    getAllProductInCart,
}