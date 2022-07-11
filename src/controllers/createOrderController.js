const {createOrder} = require("../services/Order")

module.exports = {
    async createOrderController(req, res) {
        try {
            await createOrder(req.body.order)
            res.status(201)
            res.send({message: "success"})
            res.end()
        } catch (e) {
            res.status(400)
            res.send({message: e.message})
            res.end()
        }
    }
}