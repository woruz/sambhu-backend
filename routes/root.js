let express = require('express');
const { validate_user_signup, validate_user_signin } = require('../validators/userValidation');
const { root } = require('../controller');
const { email_check, verifyToken } = require('../utils/rootUtils');
let router = express.Router()


router.get('/hello',verifyToken, (req,res) => {
    res.json({result: "Hello Sambhu"})
});

router.post('/signup', async(req,res) => {
    let post_data = req.body;

    try {
        let validation = await validate_user_signup(post_data)

        if(validation.error){
            throw new Error(validation.error.details[0].message)
        }

        await root.sign_up(post_data, (ures) => {
            if(ures){
                res.status(201).json({success: true, message: "User Created", result: ures})
            }else{
                res.status(400).json({success: false, message: "Bad Request"})
            }
        })

    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", message: error.message})
    }
})

router.post('/signin', async(req,res) => {
    let post_data = req.body;

    try {
        let validation = await validate_user_signin(post_data)

        if(validation.error){
            throw new Error(validation.error.details[0].message)
        }

        await root.sign_in(post_data, (ures) => {
            if(ures.success){
                res.status(200).json({success: true, message: ures.message, result: ures.result})
            }else{
                res.status(401).json({success: false, message: "Unauthorized"})
            }
        })

    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", message: error.message})
    }
})




module.exports = function(app){
    app.use("/",router)
}