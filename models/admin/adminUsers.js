const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({
  
    name: { type: String, requied: true },
    email: { type: String, requied: true },
    password: { type: String, requied: true },
    Date: { type: String, requied: true }
});
let adminUSERS = mongoose.model("adminUsers", adminSchema);
module.exports = adminUSERS;