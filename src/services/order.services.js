const Order = require("../models/orders.models");

class orderServices {
    static async create(newOrder) {
        try {
            const orderCreated = await Order.create(newOrder)
            return orderCreated
        } catch (error) {
            throw error
        }
    }
    static async getAll() {
        try {
            const result = await Order.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
}


module.exports = orderServices;