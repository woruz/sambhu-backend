

const {paragraph} = require('../models/workSpace')


module.exports = {
    postParagraph: async(data,cb) => {
        let limit = data.limit
        let count = data.paragraph.split(" ").length
        if(count === limit){
            console.log(2)
            console.log({data,count})
            new paragraph(data).save().then((mongoRes) => {
                console.log({mongoRes})
                if(mongoRes.length === 0){
                    cb(false)
                }else{
                    cb(mongoRes)
                }
            }).catch((err) => {
                console.log(err)
                cb(false)
            })
        }else{
            if(count > limit){
                return `need ${count-limit} more words`
            }else{
                return `need ${limit-count} less words`
            }
        }
    }
}