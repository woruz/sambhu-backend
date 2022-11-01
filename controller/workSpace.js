

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
       let error_array = []

       let test_paragraph = await  paragraph.findOne({_id: paragraph_id.id})
       let upper_limit = (1 + 0.05)*test_paragraph.limit; 

       let test_paragraph_array = test_paragraph.paragraph.split(" ");
       let postData_array = postData.inputParagraph.split(" ");

       postData_array.forEach((val,index) => {
        if(test_paragraph_array[index] != val){
            error_array.push([index+1,val])
        }
       })

       if(postData_array.length < test_paragraph_array.length){
        cb(`you are ${test_paragraph_array.length - postData_array.length} words short`)
       }else if(postData_array.length > test_paragraph_array.length){
            if(postData_array.length > upper_limit){
                cb({message: `you have exceeded the word limit by ${postData_array.length-upper_limit} words`,error: error_array})
            }else{
                cb({message: `you are within the limit`,error: error_array})
            }
       }else if(error_array.length != 0){
        cb(error_array)
       }else{
        cb("Good Job")
       }
    }
}