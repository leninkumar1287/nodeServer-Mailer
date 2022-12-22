const router = require('express').Router()
const addUserRouter = require('./mailSender')

router.use('/mail',addUserRouter)

module.exports = router