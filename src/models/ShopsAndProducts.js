const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
    name: {type: String}
});

const ProductSchema = new mongoose.Schema({
    name: {type: String},
    price_per_unit: {type: Number},
    shop_id: {type: String},
});

module.exports = {
    ShopsModel: mongoose.model("Shop", ShopSchema, "Shops"),
    ProductModel: mongoose.model("Product", ProductSchema, "Products")
}