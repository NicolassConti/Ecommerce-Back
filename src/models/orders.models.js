const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Order = db.define("orders", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_Id",

    },
})

module.exports = Order