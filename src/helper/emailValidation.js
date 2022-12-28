const Joi = require('joi')

exports.verify = (req) => {
    let schema = Joi.object({
        emailId: Joi.string().email(({ minDomainSegments: 2, tlds: { allow: ['com', 'io'] } })).lowercase().required(),
        userName: Joi.string().alphanum().min(3).max(30).required()
    })
    return schema.validate(req, { abortEarly: false });
}