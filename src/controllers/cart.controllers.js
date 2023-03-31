const cartServices = require("../services/cart.services");


const createdCart = async(req, res , next) =>{
    try {
        const newCart = req.body
        const result = await cartServices.create(newCart)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
const getAllCart = async(req, res, next) => {
    try {
        const allCart = await cartServices.getAll()
        res.json(allCart)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createdCart,
    getAllCart
}