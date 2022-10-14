let express = require('express')
let router = express.Router()


router.get('/hello', (req,res) => {
    res.json({result: "Hello Sambhu"})
});




module.exports = function(app){
    app.use("/",router)
}