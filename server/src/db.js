const {Sequelize} = require("sequelize");
require("dotenv").config();

const userModel = require("./models/userModel");
const saleModel = require("./models/saleModel");
const productModel = require("./models/productModel");
const categoryModel = require("./models/categoryModel");
const reviewModel = require("./models/reviewModel")

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging: false});

userModel(sequelize);
saleModel(sequelize);
productModel(sequelize);
categoryModel(sequelize);
reviewModel(sequelize);

const {User, Sale, Product, Category, Review} = sequelize.models;

User.hasMany(Sale);
Sale.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

Sale.belongsToMany(Product, {through: 'Sale_Product'});
Product.belongsToMany(Sale, {through: 'Sale_Product'});

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}