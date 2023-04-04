const Product = require("../models/products.models");
const User = require("../models/users.models");

class productServices {
    static async create(newProduct) {
        try {
            const productCreated = await Product.create(newProduct)
            return productCreated
        } catch (error) {
            throw error
        }
    }
    static async getAll() {
        try {
            const result = await Product.findAll({
                include : {
                    model: User,
                    attributes: ["username"]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async update(data,id) {
        try {
            const updateProduct = await Product.update(data, {
                where: {id}
                })
            return updateProduct
        } catch (error) {
            throw error
        }
    }
   static async getProductUser(id) {
    try {
        const userProduct = await User.findByPk(id, {
            attributes : ["username"],
            include: {
                model: Product,
                attributes: ["name"]
            }
        })
        return userProduct
    } catch (error) {
        throw error   
    }
   }
}


module.exports = productServices;