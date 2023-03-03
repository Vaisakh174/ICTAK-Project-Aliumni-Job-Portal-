const mongoose = require("mongoose");
const schema = mongoose.Schema;

const approveJob = new schema({

    JobID: { type: String, requied: true },
    OwnerID: { type: String, requied: true },
    Jobname: { type: String, requied: true },
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
    CompanyName: { type: String, requied: true },
    Alumni_name: { type: String, requied: true },
    Alumni_phone: { type: String, requied: true },
    Alumni_email: { type: String, requied: true },
    Alumni_qualification: { type: String, requied: true },
    Alumni_Experience: { type: String, requied: true },
    Alumni_course: { type: String, requied: true },
    Alumni_branch: { type: String, requied: true },
    Alumni_Placement: { type: String, requied: true },
    Placed_company: { type: String, requied: true },
    filename: { type: String },
    Date: { type: String, requied: true }


});
let apDATA = mongoose.model("approveJobReq", approveJob);
module.exports = apDATA;