const mongoose = require('mongoose'),
Schema = mongoose.Schema

let schema = new Schema(
    {
        userId: { type: String, required: [true, "userId is necessary"] },
        paragraph_id: { type: String, required: [true, "paragraph id is required"], unique: true, trim: true },
        test_text: { type: String, required: [true, "test text is required"] },
        total_words: { type: Number, required: [true, "word count is required"]},
        total_key_depression: { type: Number, required: [true, "key depression count is required"]},
        omission_of_word:  { type: Number, required: [true, "omission count is required"]},
        substitution_of_word:  { type: Number, required: [true, "substitution count is required"]},
        spelling_error:  { type: Number, required: [true, "spelling error count is required"]},
        repetition:  { type: Number, required: [true, "repetition count is required"]},
        additional_word:  { type: Number, required: [true, "additional word count is required"]},
        spacing_error:  { type: Number, required: [true, "spacing error count is required"]},
        wrong_capitalization:  { type: Number, required: [true, "wrong capitalization error count is required"]},
        puntuation_error:  { type: Number, required: [true, "puntuation error count is required"]}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Paragraph", schema)