const Order = require("../models/orders.models");
const User = require("../models/users.models");

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
    static async getOneOrder(id) {
        try {
            const userOrders = await User.findByPk(id, {
                attributes: ["username"],
                include: {
                    model: Order,
                    attributes: ["totalPrice"]
                }
            })
            return userOrders
        } catch (error) {
            throw error
        }
    }
}


module.exports = orderServices;