const { Datatypes } = require("sequelize");

const db = require("../utils/database");


const User = db.define("users", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
    },
    username: {
        type: Datatypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: Datatypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: Datatypes.STRING(15),
        allowNull: false,
    },
    avatar: {
        type: Datatypes.STRING(50)
    },

}
);


module.exports = User;