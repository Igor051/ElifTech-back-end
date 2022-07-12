const {OrderModel} = require("../models/Order")

module.exports = {
    async createOrder(order) {

        //trim all strings of an object
        Object.keys(order).map(k => order[k] = typeof order[k] == 'string' ? order[k].trim() : order[k]);

        await OrderModel.create(order)
    },

    async getOrdersByEmailPhone(email, phone) {

        return OrderModel.find({email: email.trim(), phone: phone.trim()});
    }
}