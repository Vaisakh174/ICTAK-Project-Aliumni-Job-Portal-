const mongoose = require('mongoose')
const GMT00 = require("../../convertGMT00toIST");
const schema = mongoose.Schema;

const signup_detail = new schema({

    name: { type: String, required: true },
    companyname: { type: String, required: true },
    email: { type: String, required: true },
    phnno: { type: Number, required: true },
    password: { type: String, required: true },
    designation: { type: String, required: true },
    date: { type: String, default: GMT00.getCurrentTimeInIST() }

})
const signupData = mongoose.model('employersignup', signup_detail)

module.exports = signupData