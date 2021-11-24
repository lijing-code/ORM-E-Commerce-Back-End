const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
// Product belongs to many Tag models,
//  and Tag belongs to many Product models.
//  Allow products to have multiple tags and tags to have many products by using the ProductTag through model.



ProductTag.init(
  {
    // define columns
//     ProductTag

// id

// Integer.

// Doesn't allow null values.

// Set as primary key.

// Uses auto increment.

// product_id

// Integer.

// References the Product model's id.

// tag_id

// Integer.

// References the Tag model's id.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
