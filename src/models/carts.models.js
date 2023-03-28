const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Cart = db.define("carts", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


});


module.exports = Cart;