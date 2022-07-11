const mongoose = require("mongoose");

const productInOrderSchema = new mongoose.Schema({
    count:  {type: Number, required: true},
    name: {type: String, required: true},
    price_per_unit: {type: Number, required: true},
    product_id: {type: String, required: true},
    shop_id: {type: String, required: true},
    shop_name: {type: String, required: true},
    _id: {type: String, required: true}

})

const OrderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    products: {type: [productInOrderSchema], required: true}
})

module.exports = {
    OrderModel: mongoose.model("Order", OrderSchema, "Orders")
}