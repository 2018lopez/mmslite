const Product = require('../models/product')

module.exports = {

    get:{

        async productStock(req,res){
            let product = await Product.get.productStock(req.body.username)
            let data = JSON.stringify(product, (_, v) => typeof v === 'bigint' ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a)
            res.send(data)
        }

     
    }
}