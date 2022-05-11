const db = require('../config/db')

const inquiry ={

    get:{

        async allInquiry(){
            let query = 'select * from inquiry_view '
            return await db(query,0, async data =>data.filter(item=>item.id))
        },

        async totalInquiry(){
            let query = 'select * from totalinquiry_view'
            return await db(query,0, async data =>data)
        }

    }

}

module.exports=inquiry