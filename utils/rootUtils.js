const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("./config")
const user = require("../models/user")

module.exports = {
    hash_pass: async (password) => {
        return bcrypt.hash(password,10)
    },

    generate_token: async (user) => {
        let {_id,name,email} = user
        let token = jwt.sign({_id,name,email}, config.jwtSecret,{
            expiresIn: 60*60*24*config.jwtSession
        })

        return token
    },

    verifyToken: async (req,res,next) => {
        try {
            let token = req.headers["x-access-token"]
            if(token){
                let verified_data = jwt.verify(
                    token,config.jwtSecret
                )
                let verified_user_data = await user.findOne({_id: verified_data._id})

                if(verified_user_data){
                    req.userData = verified_data
                    next()
                }else{
                    throw new Error("Something went wrong")
                }
            }else{
                throw new Error("Token missing")
            }
        } catch (error) {
            res.status(500).json({message: "something went wrong"})
        }
    }
}