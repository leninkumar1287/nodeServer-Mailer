const Joi = require('joi')

exports.mailId = (req) => {
    let schema = Joi.object({
        emailId: Joi.string().email(({ minDomainSegments: 2, tlds: { allow: ['com', 'io'] } })).lowercase().required(),
    })
    return schema.validate(req, { abortEarly: false });
}