const ProductInCart = require("../models/productInCarts.models");



class productInOrderServices {
    static async create(newProductInCart){
        try {
            const cartProductCreated = await ProductInCart.create(newProductInCart)
            return cartProductCreated
        } catch (error) {
            throw error
        }
    }
    static async getAll() {
        try {
            const result = await ProductInCart.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
}


module.exports = productInOrderServices;
