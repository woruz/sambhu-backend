const paragraph = require("../models/sampleText")
const { performance_index_calculation } = require("../utils/textUtils")


module.exports = {
    post_sample_text: async(body,cb) => {
        try {
            body.wordLimit = body?.paragraph.length
        
            new paragraph(body).save().then(mongoRes => {
                cb({success: true, result: mongoRes})
            }).catch(err => {
                cb({success: false, result: err.message})
            })
        } catch (error) {
            cb({success: false, result: error.message})
        }
    },

    get_all_paragraph: async() => {
        try {
            return paragraph.find().sort({createdAt: -1}).then(mongoRes => {
                return {success: true,result: mongoRes}
            }).catch(err => {
                return {success: false, result: err.message}
            })
        } catch (error) {
            return {success: false, result: error.message}
        }
    },

    get_single_paragraph: async(paragraph_id,cb) => {
        try {
            await paragraph.findOne({_id: paragraph_id}).then(mongoRes => {
                    cb({success: true, result: mongoRes})
            }).catch(err => {
                cb({success: false, result: err.message})
            })
        } catch (error) {
            return {success: false, result: error.message}
        }
    },

    post_test_paragraph: async(post_data,cb) => {
        let {sample_paragraph_id} = post_data
        try {
            let sample_text = await paragraph.findOne({_id: sample_paragraph_id})
            let performance_index = performance_index_calculation(post_data,sample_text)
            new paragraph(body).save().then(mongoRes => {
                cb({success: true, result: mongoRes})
            }).catch(err => {
                cb({success: false, result: err.message})
            })
        } catch (error) {
            cb({success: false, result: error.message})
        }
    }
}