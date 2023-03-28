const { Datatypes } = require("sequelize");
const db = require("../utils/database");


const Cart = db.define("carts", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
    },
    userId: {
        type: Datatypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: Datatypes.INTEGER,
        allowNull: false,
    },


});


module.exports = Cart;