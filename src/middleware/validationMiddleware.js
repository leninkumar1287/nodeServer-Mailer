const { StatusCodes } = require('http-status-codes')
const userController = require('../controller/usersController')
const messageFormatter = require('../utils/messageFormatter')
const walAddValidator = require('../helper/walAddValidator')
const emailValidator = require('../helper/emailValidation')
exports.addressValidator = async (req, res) => {
    try {
        let { error } = await walAddValidator.walletAddressValidation(req.body,res)
        if (error) {
            return res.status(StatusCodes.BAD_REQUEST)
                .send(messageFormatter.validationFormat(
                    error,
                    'addressValidator',
                    StatusCodes.BAD_REQUEST
                ))
        }
        return userController.sendMail(req, res)
    } catch (error) {
        console.log("lenin")
        return res.status(StatusCodes.BAD_REQUEST)
            .send(messageFormatter.errorMsgFormat(
                error.message,
                'addressValidation',
                StatusCodes.BAD_REQUEST
            ))
    }
}

exports.emailValidator = async (req, res) => {
    try {
        let { error } = await emailValidator.mailId(req.body,res)
        if (error) {
            return res.status(StatusCodes.BAD_REQUEST)
                .send(messageFormatter.validationFormat(
                    error,
                    'emailValidator',
                    StatusCodes.BAD_REQUEST
                ))
        }
        return
    } catch (error) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send(messageFormatter.errorMsgFormat(
                error.message,
                'emailValidation',
                StatusCodes.BAD_REQUEST
            ))
    }
}