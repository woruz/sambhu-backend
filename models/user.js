const mongoose = require('mongoose'),
Schema = mongoose.Schema

let schema = new Schema(
    {
        name: { type: String, required: [true, "name input is necessary"] },
        email: { type: String, required: [true, "email input is required"], unique: true },
        password: { type: String, required: [true, "password input is required"] }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("users", schema)