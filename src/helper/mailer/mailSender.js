const { StatusCodes } = require('http-status-codes')
const transporter = require('./nodeMailer')
/*********************************
 * Send OTP to Users
 *
 * @param {string}      Name
 * @param {string}      UserId
 * @param {string}      email
 * @param {string}      password
 * 
 * @returns {function}
 *********************************/

const mailSender = async (request, res) => {
    try {
        // Mail helpersjoi
        const mailoption = {
            from: process.env.SENDER,
            to: process.env.RECEIVER,
            subject: "metaMask Login",
            html: `
            <h2>You have successfully logged in metamask wallet</h2>
            <h3>Welcome home puppy ma</h3>
            </p> You now connected </br>
            Chain Name      : <b>${request.chain}</b></br>
            Account Address : <b>${request.address.substring(0, 5) + '...' + request.address.substring(request.address.length - 5, request.address.length)} </b></p>`
        }
        // Send mail stuff
        transporter.sendMail(mailoption, (err, data) => {
            if (err) {
                console.log(err)
                return response.status(StatusCodes.BAD_REQUEST).send(messageFormatter.successFormat('Failed to send mail', 'sendMail', StatusCodes.OK))
            } else {
                return response.status(StatusCodes.OK).send(messageFormatter.successFormat('mailSend Succesfully', 'sendMail', StatusCodes.OK))

            }
        })

    } catch (error) {
        console.log(error)
        return response.status(StatusCodes.BAD_REQUEST).send(messageFormatter.successFormat('Failed to send mail', 'sendMail', StatusCodes.OK))
    }
}

module.exports = mailSender