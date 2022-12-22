const { StatusCodes } = require('http-status-codes');
const WAValidator = require('multicoin-address-validator');
const messageFormatter = require('../utils/messageFormatter')

exports.walletAddressValidation = async (req, res) => {
    try {
        let valid = WAValidator.validate(req.address, req.symbol);
        if (valid){
            return res.status(StatusCodes.OK).send(messageFormatter.successFormat('✅ Given address was validated', "Wallet Address Validation", StatusCodes.OK))
        }else
        return res.status(StatusCodes.NOT_ACCEPTABLE).send(messageFormatter.errorMsgFormat(error.message, 'Wallet Address Validation', StatusCodes.NOT_ACCEPTABLE))  
    } catch (error) {
        return res.status(StatusCodes.NOT_ACCEPTABLE).send(messageFormatter.errorMsgFormat(error.message, 'Wallet Address Validation', StatusCodes.NOT_ACCEPTABLE))
    }
}
