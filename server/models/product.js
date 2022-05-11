const db = require('../config/db')

const product ={

    get:{

        async productStock(username){
            let query = 'call sp_stockAvailable(?)'
            return await db(query,[username], async data =>data[0])
        }


       
    }

}

module.exports =  product