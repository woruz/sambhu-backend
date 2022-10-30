

const {paragraph} = require('../models/workSpace')


module.exports = {
    postParagraph: async(data,cb) => {
        let limit = data.limit;
        let count = data.paragraph.split(" ").length;

        if(count === limit){
           
            new paragraph(data).save().then((mongoRes) => {
                if(mongoRes.length === 0){
                    cb(false)
                }else{
                    cb(mongoRes)
                }
            }).catch((err) => {
                cb(false)
            })
        }else{
            if(count > limit){
                cb(`need ${count-limit} less words`)
            }else{
                cb(`need ${limit-count} more words`)
            }
        }
    },

    check: async(postData, paragraph_id, cb) => {
       let test_paragraph = await  paragraph.findOne({_id: paragraph_id.id})
       let upper_limit = (1 + 0.2)*test_paragraph.limit; 

       if(postData.length > upper_limit){
        cb(`you have exceeded the word limit by ${postData.length} - ${upper_limit} words`)
       }
    }
}