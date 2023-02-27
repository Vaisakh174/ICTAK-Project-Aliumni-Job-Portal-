const mongoose = require('mongoose')
const schema= mongoose.Schema;
const GMT00=require('../convertGMT00toIST')
const otpSchema = new schema({

    email: String,
    otp: String,
    timestamp: Number,
    date: { type: String, default: GMT00.getCurrentTimeInIST() }
    

})
const OTP = mongoose.model('Otp',otpSchema)

module.exports = OTP