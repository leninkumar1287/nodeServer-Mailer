const expressRouter = require('express').Router()
const validationMiddleware = require('../middleware/validationMiddleware')

expressRouter.post('/sendmail', validationMiddleware.addressValidator, validationMiddleware.emailValidator)

module.exports = expressRouter