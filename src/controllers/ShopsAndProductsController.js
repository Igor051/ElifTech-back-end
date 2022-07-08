const {getAllShopsWithProducts} = require("../services/ShopAndProducts")

const fs = require("fs");
const path = require("path");

module.exports = {
    async ShopsAndProductsController(req, res) {
        try {
            let shopsWithProducts = await getAllShopsWithProducts()

            const shopsWithProductsToSend = shopsWithProducts.map((item, index, arr) => {
                return {
                    ...item,
                    products: item.products.map((product) => {
                        return {
                            ...product.toJSON(),
                            image:  fs.readFileSync(path.join(process.cwd(), "images", `${item.name}`, `${product.name}.jpg`)).toString("base64")
                        }

                    })
                }

            })

            res.send(shopsWithProductsToSend)
            res.end()
        } catch (e) {
            res.status = 500
            res.send(e.message)
            res.end()
        }

    }
}