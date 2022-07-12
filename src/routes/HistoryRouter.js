const {Router} = require("express")
const {HistoryController} = require("../controllers")
const {reqBodyValidity} = require("../middlewares/historyMiddlewares")

const HistoryRouter = Router()

HistoryRouter.put("/", reqBodyValidity, HistoryController)

module.exports = HistoryRouter