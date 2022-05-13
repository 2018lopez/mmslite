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
      },

      async stallsInCayo(){

        let query = 'select * from stallsincayo_view'
        return await db(query,0, async data =>data)

     },

     
     async viewStallByCode(stall){

      let query = 'call sp_viewStallByCode(?)'
      return await db(query,[stall], async data=>data[0])
   }

    }

}

module.exports = stall