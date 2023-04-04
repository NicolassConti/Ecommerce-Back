const cartServices = require("../services/cart.services");
const ProductInCart = require("../models/productInCarts.models");
const Cart = require("../models/carts.models");


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
const addProductToCart = async(req,res,next) => {
    try {
        const {cartId, productId, quantity, price} = req.body
        await ProductInCart.create ({cartId, productId, quantity, price})
        const totalPrice = price * quantity
        await Cart.increment({totalPrice}, {where : {id : cartId}})
        res.json({
            message: "product added"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdCart,
    getAllCart,
    addProductToCart,
}