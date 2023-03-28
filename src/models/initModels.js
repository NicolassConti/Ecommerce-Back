const User = require("../models/users.models");
const Cart = require("../models/carts.models");
const Order = require("../models/orders.models");
const Product = require("../models/products.models");
const ProductInOrder = require("../models/productInOrders.models");
const ProductInCart = require("../models/productInCarts.models");

const initModels = () => {
    
    User.hasMany(Product, { foreignkey: "userId" })
    Product.belongsTo(User, { foreignkey: "userId" })

    User.hasMany(Order , {foreignKey:"userId"})
    Order.belongsTo(User, {foreignKey: "userId"})
 
    Cart.hasMany(ProductInCart, {foreignKey:"cartId"})
    ProductInCart.belongsTo(Cart, {foreignKey:"cartId"})

    Product.hasMany(ProductInCart , {foreignKey: "productId"})
    ProductInCart.belongsTo(Product, {foreignKey:"productId"})

    Order.hasMany(ProductInOrder, {foreignKey:"orderId"})
    ProductInOrder.belongsTo(Order, {foreignKey:"orderId"})

    Product.hasMany(ProductInOrder, {foreignKey:"productId"})
    ProductInOrder.belongsTo(Product, {foreignKey:"productId"})


}

module.exports = initModels;