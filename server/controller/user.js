const User = require('../models/user')
const validate = require('../lib/validatePwd')


module.exports ={

    get:{},
    post:{
        async create(req,res){
            let user ={}
            try{

                if(validate.isLength(req.body.password)){
                        user.name = req.body.name
                        user.address1 = req.body.address1
                        user.address2 = req.body.address2
                        user.district = req.body.district
                        user.tel = req.body.phone
                        user.email = req.body.email
                        user.username = req.body.username
                        user.password = req.body.password
                        user.userType = req.body.userType

                     try{

                        let data = await User.create(user)
                      
                        res.json({msg: "Successfully Created User"})
                     }catch(e){
                         
                        res.json({msg: "Error:" + e})
                     }

                }else throw new Error( 'password must be of atleast 8 characters')


            }catch(e){

                console.log("Failed",e)
             

            }
        }
    },

    put:{

        async editPassword(req,res){
            let user ={username: req.body.resetusername, password: req.body.resetpassword}
            let data = await User.editPassword(user)
            res.json(data)
        }
    }
}