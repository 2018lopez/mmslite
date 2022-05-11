const Stall = require('../models/stall')

module.exports = {

    get:{

       async totalStall(req, res){

        let stall = await Stall.get.totalStall()
        let data = JSON.stringify(stall, (_, v) => typeof v === 'bigint' ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a)
        res.send(data)

       },

       async stallByMarket(req,res){
           let stall = await Stall.get.stallByMarket(req.body.stall)
           res.send(stall)
       }
    }
}