const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const bcrypt = require("bcrypt");


const User = db.define("users", {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING(50)
    },

}, {
    hooks : {
        beforeCreate : async(user) => {
            try {
                const salt = await bcrypt.genSalt(10)
                const passwordHash = await bcrypt.hash(user.password, salt)
                user.password = passwordHash
            } catch (error) {
                throw error
            }
        }
    }
}
);


module.exports = User;