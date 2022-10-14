

const mongoose = require("mongoose"),
    Schema = mongoose.Schema

let newSchema = new Schema({
    limit: {type: Number},
    paragraph: {type: String, trim: true, default: ""}
})

const paragraph = mongoose.model(
    'paragraph',
    newSchema
)

module.exports = {paragraph}