const Stall = require('../models/stall')



const stall = {

    get:{

       async totalStall(req, res){

        let stall = await Stall.get.totalStall()
        let data = JSON.stringify(stall, (_, v) => typeof v === 'bigint' ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a)
        res.send(data)

       },

       async stallByMarket(req,res){
           let stall = await Stall.get.stallByMarket(req.body.stall)
           res.send(stall)
       },

       async stallInCayo(req,res){

        let stall = await Stall.get.stallsInCayo()
        res.send(stall)

       },

       async viewStallByCode(req,res){

        let stall = await Stall.get.viewStallByCode(req.body.stallCode)
        res.send(stall)

       },

    },

    post:{

        async addStall(req,res){
           let filePath = require('../config').uploads_dir
            let vStall = req.files ? req.files.image : null
            let stallStatus = req.files
            filePath = filePath + (new Date()).getTime() + '.' + stallStatus.image.name.split('.').pop()

           if(vStall){

          vStall.mv(filePath)
            let stall = {}
                stall.stallName = req.body.stall
                stall.market = req.body.market
                stall.fee = req.body.fee
                stall.vimage = 'uploads/' + filePath.split('\\').pop()
                stall.description = req.body.description

                try{
                    console.log(stall)
                    
                    // let data = Invoice.post.createInvoice(invoice)
                res.json({msg: "Successfully Created Stall"})

                }catch(e){
                    console.log(e)
                }

           }else{

            res.status(404).json({msg: "No Image file"})
           }
                
                
            
        }
    },

    
   


}

module.exports={stall}