const { Datatypes } = require("sequelize");
const db = require("../utils/database");


const ProductInCart = db.define("productInCarts", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
    },
    orderId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        field: "order_Id",

    },
    productId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        field: "product_Id",

    },
    quantity: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    price: {
        type: Datatypes.INTEGER,
        allowNull: false,

    },
    status: {
        type: Datatypes.STRING,
        defaultValue: "no-pagado"
    },
})

module.exports = ProductInCart;