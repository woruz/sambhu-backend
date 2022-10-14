let express = require('express')
let controllers = require('../controller/index')
let router = express.Router()


router.get('/', async(req, res) => {
    try {
        let result = await controllers.workSpace.getAllPastTest()
            if(result){
                res.json({success: true, result: result})
            }else{
                res.json({success: false, result: "Someting is wrong"})
            }
    } catch (error) {
        console.log(error)
        res.json({error: error.message})
    }
})

router.get('/:id', async(req,res) => {
    let id = req.params
    try {
        
    } catch (error) {
        
    }
})

module.exports = function(app){
    app.use("/history",router)
}