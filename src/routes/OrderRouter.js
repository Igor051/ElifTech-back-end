const {Router} = require("express")
const {createOrderController} = require("../controllers")

const OrderRouter = Router()

OrderRouter.post("/", createOrderController)

module.exports = OrderRouter
