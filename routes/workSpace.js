let express = require('express')
const Joi = require('Joi')
let controllers = require('../controller/index')
let router = express.Router()


router.post('/', async(req, res) => {
    let postData = req.body;

    const schema = Joi.object({
        limit: Joi.number().min(2).max(5000).required(),
        paragraph: Joi.string().required()
    })
    try {
        let validation = schema.validate(postData);

        if (validation.error) {
            throw new Error(validation.error.details[0].message);
        }
        controllers.workSpace.postParagraph(postData, (ures) => {
            if(ures){
                res.json({success: true, result: ures});
            }else{
                res.json({success: false, result: "Someting is wrong"});
            }
        })
    } catch (error) {
        res.json({error: error.message});
    }
})

router.post('/check/:id', async(req,res) => {
    let postData = req.body;
    let paragraph_id = req.params;

    const schema = Joi.object({
        inputParagraph: Joi.string().required(),
    })

    try {
        let validation = schema.validate(postData);

        if (validation.error) {
            throw new Error(validation.error.details[0].message);
        }

        controllers.workSpace.check(postData, paragraph_id, ures => {
            if(ures){
                res.json({success: true, result: ures});
            }else{
                res.json({success: false, result: "Someting is wrong"});
            }
        })

    } catch (error) {
        res.json({error: error.message});
    }
})

module.exports = function(app){
    app.use("/workSpace",router)
}