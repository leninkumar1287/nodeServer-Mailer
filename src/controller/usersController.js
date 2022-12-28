const { StatusCodes } = require('http-status-codes')
const mailSender = require('../helper/mailer/mailSender')
const userModel = require('../models/metaMaskModel')
const messageFormatter = require('../utils/messageFormatter')
exports.sendMail = async (request, response) => {
    try {
        console.log(request.body)
        let checkTheUserExist = await userModel.findOne({ userWalletAddress: request.body.address })
        if (checkTheUserExist == null) {
            let payLoad = {
                userName : request.body.name,
                userEmail: request.body.email,
                userWalletAddress: request.body.address,
                symbol: request.body.symbol
            }
            await userModel(payLoad).save()
            await mailSender(request.body)
            return response.status(StatusCodes.OK).send(messageFormatter.successFormat("Mail send successfully","sendMail", StatusCodes.OK,"success"))
        }
        else
            await mailSender(request.body)
            return response.status(StatusCodes.OK).send(messageFormatter.successFormat("Mail send successfully","sendMail", StatusCodes.OK,"success"))
    }
    catch (error) {
        console.log("Error message  :", error.message)
        return response.send(error.message)
    }
}