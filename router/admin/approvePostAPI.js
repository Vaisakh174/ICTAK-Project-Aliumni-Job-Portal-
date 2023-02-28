const express = require("express");
const router = express.Router();
const approvePost = require("../../models/admin/approvePost.js");
const approvedPost = require("../../models/admin/approvedpost.js");
const jwt = require('jsonwebtoken')
const GMT00 = require("../../convertGMT00toIST.js");
const multerData = require("./fileUploadToLocaly.js");
var filenameV;
const verifier=require('../../tokenVerifier')







//get all list (get) for data approved
router.get('/getAllApproved', async (req, res) => {

    try {
        let list = await approvedPost.find().sort({ "Date": -1 });;

        console.log(`from get apprd method`);
        res.status(200).send(list);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});







//add data when approved (post)
router.post('/posted', verifier.verifytoken, async (req, res) => {
    // console.log("hr",req.body.Jobname);
    try {

        let item = {


            JobID: req.body.JobID,
            Jobname: req.body.Jobname,
            Place: req.body.Place,
            Salary: req.body.Salary,
            JobType: req.body.JobType,
            Qualifications: req.body.Qualifications,
            JobDescription: req.body.JobDescription,
            Experience: req.body.Experience,
            Benefits: req.body.Benefits,
            Schedule: req.body.Schedule,
            Language: req.body.Language,
            Contact: req.body.Contact,
            CompanyName: req.body.CompanyName,
            filename: req.body.filename,

            Alumni_name: req.body.Alumni_name,
            Alumni_phone: req.body.Alumni_phone,
            Alumni_email: req.body.Alumni_email,
            Alumni_qualification: req.body.Alumni_qualification,
            Alumni_Experience: req.body.Alumni_Experience,
            Alumni_course: req.body.Alumni_course,
            Alumni_branch: req.body.Alumni_branch,
            Alumni_Placement: req.body.Alumni_Placement,
            Placed_company: req.body.Placed_company,
            Date: req.body.Date

        }
        const newdata = new approvedPost(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.status(200).send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete data
router.delete('/deleted/:id', verifier.verifytoken, async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await approvedPost.findByIdAndDelete(id);
        // console.log(`from delete method ${deletedata}`);
        res.status(200).send(deletedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});












// //appvrove section

// //add data posting  (through postman)
// router.post('/post', async (req, res) => {

//     try {
//         const DateNow = Date.now();
//         let item = {


//             JobID: req.body._id,
//             Jobname: req.body.Jobname,
//             Place: req.body.Place,
//             Salary: req.body.Salary,
//             JobType: req.body.JobType,
//             Qualifications: req.body.Qualifications,
//             JobDescription: req.body.JobDescription,
//             Experience: req.body.Experience,
//             Benefits: req.body.Benefits,
//             Schedule: req.body.Schedule,
//             Language: req.body.Language,
//             Contact: req.body.Contact,
//             CompanyName: req.body.CompanyName,


//             Alumni_name: req.body.Alumni_name,
//             Alumni_phone: req.body.Alumni_phone,
//             Alumni_email: req.body.Alumni_email,
//             Alumni_qualification: req.body.Alumni_qualification,
//             Alumni_Experience: req.body.Alumni_Experience,
//             Alumni_course: req.body.Alumni_course,
//             Alumni_branch: req.body.Alumni_branch,
//             Alumni_Placement: req.body.Alumni_Placement,
//             Placed_company: req.body.Placed_company,
//             Date: getCurrentTimeInIST()



//         }
//         const newdata = new approvePost(item);
//         const savedata = await newdata.save();
//         // console.log(`from post method ${savedata}`);
//         res.status(200).send(savedata);

//     } catch (error) {
//         console.log(`error from get method ${error}`);
//     }

// });


//get all list (get) for data
router.get('/getall', verifier.verifytoken, async (req, res) => {

    try {
        let list = await approvePost.find().sort({ "Date": -1 });

        // console.log(`from get method ${list}`);
        res.status(200).send(list);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});

// fetch single data (get)
router.get('/getsingle/:id', verifier.verifytoken, async (req, res) => {

    try {
        let id = req.params.id;
        const singledata = await approvePost.findById(id);
        // console.log(`from get with id method ${singledata}`);
        res.status(200).send(singledata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



// for local upload 
// router.post('/upload', multerData.upload.single('file'), async (req, res,) => {





//     filenameV = ""
//     try {
//         const file = req.file;

//         filenameV = file.filename
//         console.log("upld file: ", filenameV);

//         let postData=JSON.parse(req.body.postData);
//         let alumniData=JSON.parse(req.body.alumniData);
        
//         if (!file) {
           
//             res.send({ "status": "Upload Error" });
     
//         }
//         else {

//             let  item = {

//                 JobID:postData._id,
//                 Jobname:postData.Jobname,
//                 Place:postData.Place,
//                 Salary:postData.Salary,
//                 JobType:postData.JobType,
//                 Qualifications:postData.Qualifications,
//                 JobDescription:postData.JobDescription,
//                 Experience:postData.Experience,
//                 Benefits:postData.Benefits,
//                 Schedule:postData.Schedule,
//                 Language:postData.Language,
//                 Contact:postData.Contact,
//                 CompanyName:postData.CompanyName,
    
    
//                 Alumni_name:alumniData.Alumni_name,
//                 Alumni_phone:alumniData.Alumni_phone,
//                 Alumni_email:alumniData.Alumni_email,
//                 Alumni_qualification:alumniData.Alumni_qualification,
//                 Alumni_Experience:alumniData.Alumni_Experience,
//                 Alumni_course:alumniData.Alumni_course,
//                 Alumni_branch:alumniData.Alumni_branch,
//                 Alumni_Placement:alumniData.Alumni_Placement,
//                 Placed_company:alumniData.Placed_company,
//                 filename:  req.file.filename,
//                 // Date: Date(DateNow).toString()
//                 Date: GMT00.getCurrentTimeInIST()
    
//             }

//             const newdata = new approvePost(item);
//             const savedata = await newdata.save();
//             console.log('from apply method item: ', item);
//             // res.status(200).send(savedata);
//             res.status(200).send({ "status": "Upload Success" });
//             // console.log("fffff",fileName)

//         }
//     } catch (error) {
//         console.log("Err 123 file upload ");
//         console.log(error);
//     }

// })




// //for local file download in angular
// router.get('/download/:filename', (req, res, next) => {
//     console.log('dwnld', req.params.filename)
//     res.download(`${__dirname}../../../Uploaded_Files/${req.params.filename}`, (err) => {

//         if (err) {
//             console.log("download err  ", err)
//             res.send({ msg: err });
//         }
//     });

// })







// delete data
router.delete('/delete/:id', verifier.verifytoken, async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await approvePost.findByIdAndDelete(id);
        // console.log(`from delete method ${deletedata}`);
        res.status(200).send(deletedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update data
router.put('/update', verifier.verifytoken, async (req, res) => {

    try {
        let id = req.body._id;

        let item = { //remove 'data' from below if we not pass data object from frontend


            JobID: req.body.data.JobID,
            Jobname: req.body.data.Jobname,
            Place: req.body.data.Place,
            Salary: req.body.data.Salary,
            JobType: req.body.data.JobType,
            Qualifications: req.body.data.Qualifications,
            JobDescription: req.body.data.JobDescription,
            Experience: req.body.data.Experience,
            Benefits: req.body.data.Benefits,
            Schedule: req.body.data.Schedule,
            Language: req.body.data.Language,
            Contact: req.body.data.Contact,
            CompanyName: req.body.data.CompanyName,


            Alumni_name: req.body.data.Alumni_name,
            Alumni_phone: req.body.data.Alumni_phone,
            Alumni_email: req.body.data.Alumni_email,
            Alumni_qualification: req.body.data.Alumni_qualification,
            Alumni_Experience: req.body.data.Alumni_Experience,
            Alumni_course: req.body.data.Alumni_course,
            Alumni_branch: req.body.data.Alumni_branch,
            Alumni_Placement: req.body.data.Alumni_Placement,
            Placed_company: req.body.data.Placed_company


        }
        // console.log("incoming data from update", item);

        let updatedata = await approvePost.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        // console.log(`from put method old data ${updatedata}`);
        res.status(200).send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


module.exports = router;
