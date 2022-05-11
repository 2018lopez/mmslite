const db = require('../config/db')

const vendor ={

    get:{

        
        async totalVendor(){
            let query = 'select * from totalvendor_view'
            return await db(query,0, async data =>data)
        }

    }

}

module.exports = vendor