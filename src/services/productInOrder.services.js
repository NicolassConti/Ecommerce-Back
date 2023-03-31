const ProductInOrder = require("../models/productInOrders.models");



class productInOrderServices {
    static async create(newProductInOrder){
        try {
            const orderProductCreated = await ProductInOrder.create(newProductInOrder)
            return orderProductCreated
        } catch (error) {
            throw error
        }
    }
    static async getAll() {
        try {
            const result = await ProductInOrder.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
}


module.exports = productInOrderServices;
