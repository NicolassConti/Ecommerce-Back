const productInOrderServices = require("../services/productInOrder.services");


const createdProductInOrder = async(req, res , next) =>{
    try {
        const newProductInOrder = req.body
        const result = await productInOrderServices.create(newProductInOrder)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}
const getAllProductInOrder = async(req, res, next) => {
    try {
        const allProductInOrder = await productInOrderServices.getAll()
        res.json(allProductInOrder)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdProductInOrder,
    getAllProductInOrder,
}