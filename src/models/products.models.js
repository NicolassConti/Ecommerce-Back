const { Datatypes } = require("sequelize");
const db = require("../utils/database");

const Product = db.define("products", {
    
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      name: {
        type: Datatypes.STRING(30),
        allowNull:false,
      },
      description: {
        type: Datatypes.STRING(100),
        allowNull:false
      },
      price: {
        type: Datatypes.INTEGER,
        allowNull:false
      },
      availabeQty: {
        type: Datatypes.STRING(15)
      },
      status: {
        type: Datatypes.STRING,
        allowNull:false,
        defaultValue: "disponible"
      },
      userId: {
        type: Datatypes.INTEGER,
        allowNull:false,
        field:"user_id"
      },
      productImage: {
        type: Datatypes.STRING(50)
      },
      
    });

module.exports = Product;