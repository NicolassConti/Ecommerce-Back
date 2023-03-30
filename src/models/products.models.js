const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Product = db.define("products", {
    
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull:false,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull:false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      availableQty: {
        type: DataTypes.STRING(15)
      },
      status: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "disponible"
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
      },
      productImage: {
        type: DataTypes.STRING(50)
      },
      
    });

module.exports = Product;