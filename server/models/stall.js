const db = require('../config/db')

const stall ={

    get:{

      async totalStall(){

        let query = 'select * from totalstall_view'
        return await db(query,0, async data=>data)
      },
      async stallByMarket(market){
       
        let query = 'call sp_stallByMarket(?)'
        return await db(query,[market], async data=>data[0])
      }

    }

}

module.exports = stall