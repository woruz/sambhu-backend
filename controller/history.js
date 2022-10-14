

const {paragraph} = require('../models/workSpace')

module.exports = {
    getAllPastTest: async(req,res) => {
        return await paragraph.find()
    }
}