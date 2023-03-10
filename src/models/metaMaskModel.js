const mongoose = require('mongoose')

const users = new mongoose.Schema({
    userName : {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userWalletAddress: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    }
})

const userModel = new mongoose.model('metmaskWalletUser', users)

module.exports = userModel