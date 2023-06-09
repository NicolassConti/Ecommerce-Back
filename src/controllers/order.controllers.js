const orderServices = require("../services/order.services");



const createOrder = async (req, res, next) => {
    try {
        const newOrder = req.body
        const result = await orderServices.create(newOrder)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}
const getAllOrder = async (req, res, next) => {
    try {
        const allOrder = await orderServices.getAll()
        res.json(allOrder)
    } catch (error) {
        next(error)
    }
}

const getOrderUsers = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await orderServices.getOneOrder(id)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createOrder,
    getAllOrder,
    getOrderUsers,
}