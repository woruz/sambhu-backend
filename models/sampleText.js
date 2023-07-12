const mongoose = require('mongoose'),
Schema = mongoose.Schema

let schema = new Schema(
    {
        userId: { type: String, required: [true, "userId is necessary"] },
        paragraph: { type: String, required: [true, "paragraph is required"], unique: true, trim: true },
        wordLimit: { type: Number, required: [true, "The number count is necessary"]},
        total_key_depression: { type: Number, required: [true, "key depression count is required"]},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Paragraph", schema)