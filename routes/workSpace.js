let express = require('express')
let controllers = require('../controller/index')
let router = express.Router()


router.post('/', async(req, res) => {
    let postData = req.body
    try {
        controllers.workSpace.postParagraph(postData, (ures) => {
            if(ures){
                res.json({success: true, result: ures})
            }else{
                res.json({success: false, result: "Someting is wrong"})
            }
        })
    } catch (error) {
        res.json({error: error.message})
    }
})

module.exports = function(app){
    app.use("/workSpace",router)
}