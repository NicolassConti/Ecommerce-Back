const { Datatypes } = require("sequelize");
const db = require("../utils/database");


const ProductInOrder = db.define("productsInOrders", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
    },
    cartId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        field: "cart_id",

    },
    productId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        field: "product_id",

    },
    quantity: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    price: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    status: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: "disponible"
    },


})


module.exports = ProductInOrder;