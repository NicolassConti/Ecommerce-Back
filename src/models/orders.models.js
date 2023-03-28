const { Datatypes } = require("sequelize");
const db = require("../utils/database");


const Order = db.define("orders", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
    },
    totalPrice: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        field: "user_Id",

    },
})

module.exports = Order