const {ShopsModel, ProductModel} = require("../models/ShopsAndProducts")

module.exports = {
    async getAllShopsWithProducts() {
        const shops = await ShopsModel.find()
        const products_ = await ProductModel.find()


        const shopsWithProducts = shops.map((item, index, arr) => {
            return {
                _id: item._id, name: item.name, products: products_.map((it, index, arr) => {

                    if (it.shop_id === item._id.toString()) {
                        return it
                    }
                })
            }
        })

         shopsWithProducts.forEach((shop)=>{
            shop.products = shop.products.filter((el)=>{
                return el != null
            })
        })

        return shopsWithProducts
    }

}
