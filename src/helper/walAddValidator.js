const { StatusCodes } = require('http-status-codes');
const WAValidator = require('multicoin-address-validator');
const messageFormatter = require('../utils/messageFormatter')

exports.walletAddressValidation = async (req, res) => {
    try {
        let valid = WAValidator.validate(req.address, req.symbol);
        if (valid) 
            return valid
    } catch (error) {
        return error
    }
}
