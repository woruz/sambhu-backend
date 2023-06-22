const user = require("../models/user")
const { hash_pass, generate_token } = require("../utils/rootUtils")



module.exports = {
    sign_up: async(body,cb) => {
        let {password} = body
        let hashed_password = await hash_pass(password)

        body.password = hashed_password
        try {
            user(body).save().then((mongoRes) => {
                cb(mongoRes)
            }).catch(err => {
                cb(false)
            })
        } catch (error) {
            cb(false)
        }
    },

    sign_in: async(body,cb) => {
        let {email,password} = body
        try {
            let indivisual_user = await user.findOne({email})
            
            console.log({indivisual_user})
            if(!indivisual_user){
                cb({success: false, message: "User not found"})
            }else{
                let token = await generate_token(indivisual_user)

                cb({success: true, message: "User logged in", result: token})
            }
        } catch (error) {
            cb({success: false, message: "Something went wrong"})
        }
    }
}