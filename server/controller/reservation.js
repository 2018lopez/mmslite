const Reservation = require('../models/reservation')

module.exports = {

    get:{

        async reservationDetails(req, res){
            // let data = {id: req.params.id};
            let reservation = await Reservation.get.detailsById(req.body.username)
            res.send(reservation)
        },

        async endStatusById (req, res){
            let reservation = await Reservation.get.endStatusById(req.body.username)
            res.send(reservation)
        }

      
    },

    put:{

        async updateEnd (req, res){

            let data ={}
            data.username = req.body.username
            data.endDate = req.body.endDate

            let reservation = await Reservation.put.updateEnd(data)
            res.send(reservation)
            
        }
    }
}