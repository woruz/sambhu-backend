const express = require('express');
const { validate_sample_text_post, validate_test_text_post } = require('../validators/sampleTextValidation');
const { sampleText } = require('../controller');
let router = express.Router()

router.post("/", async(req,res) => {
    let post_data = req.body

    try {
        let validation = await validate_sample_text_post(post_data)

        if(validation.error){
            throw new Error(validation.error.details[0].message)
        }

        await sampleText.post_sample_text(post_data, (ures) => {
            if(ures.success){
                res.status(201).json({success: ures.success, message: "Resource created", result: ures.result})
            }else{
                res.status(500).json({success: ures.success, message: "Resource could not be created", result: ures.result})
            }
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Something went wrong", result: error.message})
    }
})

router.get("/getAllParagraph", async(req,res) => {
    try {
        let response = await sampleText.get_all_paragraph()
        if(response.result.length){
            res.status(200).json({success: response.success, message: "OK", result: response.result})
        }else{
            res.status(204).json({success: response.success, message: "No Content", result: response.result})
        }
    } catch (error) {
        res.status(500).json({success: false, message: "Something went wrong", result: error.message})
    }
})

router.get("/getOneParagraph/:paragraphId", async(req,res) => {
    let { paragraphId } = req.params

    try {
        await sampleText.get_single_paragraph(paragraphId,ures => {
            if(ures.success){
                res.status(200).json({success: ures.success, message: "OK", result: ures.result})
            }else{
                res.status(204).json({success: ures.success, message: "No Content", result: ures.result})
            }
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Something went wrong", result: error.message})
    }
})

router.get("/postTestParagraph", async(req,res) => {
    let post_data = req.body

    try {
        let validation = await validate_test_text_post(post_data)

        if(validation.error){
            throw new Error(validation.error.details[0].message)
        }

        await sampleText.post_test_paragraph(post_data, (ures) => {
            if(ures.success){
                res.status(201).json({success: ures.success, message: "Resource created", result: ures.result})
            }else{
                res.status(500).json({success: ures.success, message: "Resource could not be created", result: ures.result})
            }
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Something went wrong", result: error.message})
    }
})



module.exports = function(app){
    app.use("/sampleText",router)
}