const mongoose = require("mongoose");
const schema = mongoose.Schema;

const alumniLoginSchema = new schema({
  
    
    email: { type: String, requied: true },
    password: { type: String, requied: true },
    Date:{type:String,default:Date.now()}

});
let alumniLoginDATA = mongoose.model("alumnilogin", alumniLoginSchema);
module.exports = alumniLoginDATA;