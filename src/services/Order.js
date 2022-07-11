const {OrderModel} = require("../models/Order")

module.exports = {
    async createOrder(order){
        await OrderModel.create(order)
    }
}