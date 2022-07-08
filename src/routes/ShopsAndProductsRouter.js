const {Router} = require("express")
const {ShopsAndProductsController} = require("../controllers")

const ShopsAndProductsRouter = Router()

ShopsAndProductsRouter.get("/", ShopsAndProductsController)

module.exports = ShopsAndProductsRouter