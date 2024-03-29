const mongoose = require("mongoose");
const schema = mongoose.Schema;
const GMT00 = require("../../convertGMT00toIST");

const alumniSchema = new schema({

    name: { type: String, requied: true },
    email: { type: String, requied: true },
    mobile: { type: Number, required: true },
    course: { type: String, requied: true },
    qualification: { type: String, required: true },
    batch: { type: String, required: true },
    placement: { type: String },
    password: { type: String, requied: true },
    Date: { type: String, default: GMT00.getCurrentTimeInIST() }

});
let alumniUSERS = mongoose.model("alumniUsers", alumniSchema);
module.exports = alumniUSERS;