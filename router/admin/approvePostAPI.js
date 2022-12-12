const express = require("express");
const router = express.Router();
const approvePost = require("../../models/admin/approvePost.js");
const approvedPost = require("../../models/admin/approvedpost.js");
const jwt = require('jsonwebtoken')
const multer = require('multer');

//middleware
function verifytoken(req, res, next) {
    console.log('headers=', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send('Unautherized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unautherized request');
    }
    let payload = jwt.verify(token, 'secretkey');
    console.log("payload=", payload);
    if (!payload) {
        return res.status(401).send('Unautherized request');
    }
    console.log("payload.subject=", payload.subject);

    req.userId = payload.subject;
    next();

}



//get all list (get) for data
router.get('/getApproved', async (req, res) => {

    try {
        let list = await approvedPost.find();

        console.log(`from get method ${list}`);
        res.send(list);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});







//add data when approved (post)
router.post('/posted', async (req, res) => {
    // console.log("hr",req.body.Jobname);
    try {
        const DateNow = Date.now();
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


            Alumni_name: req.body.Alumni_name,
            Alumni_phone: req.body.Alumni_phone,
            Alumni_email: req.body.Alumni_email,
            Alumni_qualification: req.body.Alumni_qualification,
            Alumni_Experience: req.body.Alumni_Experience,
            Alumni_course: req.body.Alumni_course,
            Alumni_branch: req.body.Alumni_branch,
            Alumni_Placement: req.body.Alumni_Placement,
            Placed_company: req.body.Placed_company,
            Date: Date(DateNow).toString()

        }
        const newdata = new approvedPost(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete data
router.delete('/deleted/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await approvedPost.findByIdAndDelete(id);
        // console.log(`from delete method ${deletedata}`);
        res.send(deletedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});












//appvrove section

//add data posting  (through postman)
router.post('/post', async (req, res) => {

    try {
        const DateNow = Date.now();
        let item = {

           
            JobID: req.body._id,
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


            Alumni_name: req.body.Alumni_name,
            Alumni_phone: req.body.Alumni_phone,
            Alumni_email: req.body.Alumni_email,
            Alumni_qualification: req.body.Alumni_qualification,
            Alumni_Experience: req.body.Alumni_Experience,
            Alumni_course: req.body.Alumni_course,
            Alumni_branch: req.body.Alumni_branch,
            Alumni_Placement: req.body.Alumni_Placement,
            Placed_company: req.body.Placed_company,
            Date: Date(DateNow).toString()

            

        }
        const newdata = new approvePost(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


//get all list (get) for data
router.get('/getall', async (req, res) => {

    try {
        let list = await approvePost.find();

        console.log(`from get method ${list}`);
        res.send(list);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});

// fetch single data (get)
router.get('/getsingle/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singledata = await approvePost.findById(id);
        console.log(`from get with id method ${singledata}`);
        res.send(singledata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

//apply job
router.post('/apply', async (req, res) => {
    console.log("*****", req.body.alumniData);
    console.log("*****", req.body.postData);
    try {
        const DateNow = Date.now();
        let item = {

      

            JobID: req.body.postData._id,
            Jobname: req.body.postData.Jobname,
            Place: req.body.postData.Place,
            Salary: req.body.postData.Salary,
            JobType: req.body.postData.JobType,
            Qualifications: req.body.postData.Qualifications,
            JobDescription: req.body.postData.JobDescription,
            Experience: req.body.postData.Experience,
            Benefits: req.body.postData.Benefits,
            Schedule: req.body.postData.Schedule,
            Language: req.body.postData.Language,
            Contact: req.body.postData.Contact,
            CompanyName: req.body.postData.CompanyName,


            Alumni_name: req.body.alumniData.Alumni_name,
            Alumni_phone: req.body.alumniData.Alumni_phone,
            Alumni_email: req.body.alumniData.Alumni_email,
            Alumni_qualification: req.body.alumniData.Alumni_qualification,
            Alumni_Experience: req.body.alumniData.Alumni_Experience,
            Alumni_course: req.body.alumniData.Alumni_course,
            Alumni_branch: req.body.alumniData.Alumni_branch,
            Alumni_Placement: req.body.alumniData.Alumni_Placement,
            Placed_company: req.body.alumniData.Placed_company,
            Date: Date(DateNow).toString()

        }
        const newdata = new approvePost(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


//file upload
const storage = multer.diskStorage({
    
    destination: (req, file, callBack) => {
        callBack(null, 'Uploaded_Files')
    },
    filename: (req, file, callBack) => {
        // const DateNow = Date.now();
        callBack(null, `alumni_resp ${file.originalname} ${Date.now()}.pdf`)
    }
})

const upload = multer({ storage: storage })

router.post('/upload',upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log("########",file.filename);
   
    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file);

})




// delete data
router.delete('/delete/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await approvePost.findByIdAndDelete(id);
        // console.log(`from delete method ${deletedata}`);
        res.send(deletedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update data
router.put('/update', async (req, res) => {

    try {
        let id = req.body._id;
        const DateNow = Date.now();
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
            Placed_company: req.body.data.Placed_company,
            Date: Date(DateNow).toString()

        }
        console.log("incoming data from update", item);

        let updatedata = await approvePost.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


module.exports = router;