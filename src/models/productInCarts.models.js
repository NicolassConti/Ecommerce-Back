const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const ProductInCart = db.define("productInCarts", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_Id",

    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_Id",

    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "no-pagado"
    },
})

module.exports = ProductInCart;