// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // This will establish the id's for the products
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // This will establish the name of the products
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // This is establishing the price of the products
    price: {
      type: DataTypes.DECIMAL (10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // This is establishing the quantity of the products with a default of 10 products
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // This acts as the foreign key for the category_id model
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
