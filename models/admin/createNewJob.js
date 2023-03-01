const mongoose = require("mongoose");
const schema = mongoose.Schema;


const postAJob = new schema({

    Jobname: { type: String, requied: true },
    CompanyName: { type: String, requied: true },
    Place: { type: String, requied: true },
    Salary: { type: String, requied: true },
    JobType: { type: String, requied: true },
    Qualifications: { type: String, requied: true },
    JobDescription: { type: String, requied: true },
    Experience: { type: String, requied: true },
    Benefits: { type: String, requied: true },
    Schedule: { type: String, requied: true },
    Language: { type: String, requied: true },
    Contact: { type: String, requied: true },
    Date: { type: String },
    ApplyStatus: { type: Number,requied: true  }
    
    
});
let jobDATA = mongoose.model("newJob", postAJob);
module.exports = jobDATA;