// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// The code below establishes relationships between the the models

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'productId',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tagId',
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Log the info to ensure that the associations actually work
console.log(Product.associations);
console.log(Category.associations);
console.log(Tag.associations);
console.log(ProductTag.associations);

