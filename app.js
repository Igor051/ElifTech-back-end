require("dotenv").config();
require("./src/configs/database").connect();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const {ShopsAndProductsRouter,OrderRouter} = require("./src/routes")

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use("/ShopsAndProducts",  ShopsAndProductsRouter)
app.use("/order", OrderRouter)


module.exports = app;