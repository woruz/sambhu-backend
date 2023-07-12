const Joi = require('joi')

let validate = (params, schema) => {
    return schema.validate(params)
}

let validate_sample_text_post = (params) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        paragraph: Joi.string().required(),
    })

    return validate(params,schema)
}

let validate_test_text_post = (params) => {
    const schema = Joi.object({
        sample_paragraph_id: Joi.string().required(),
        test_paragraph: Joi.string().required()
    })

    return validate(params,schema)
}


module.exports = {
    validate_sample_text_post,
    validate_test_text_post
}