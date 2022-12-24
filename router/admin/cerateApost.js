const express = require("express");
const router = express.Router();
const DATA = require("../../models/admin/createNewJob.js");

const jwt = require('jsonwebtoken')


//middleware
function verifytoken(req, res, next) {
    // console.log('headers=', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send('Unautherized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unautherized request');
    }
    let payload = jwt.verify(token, 'secretkey');
    // console.log("payload=", payload);
    if (!payload) {
        return res.status(401).send('Unautherized request');
    }
    // console.log("payload.subject=", payload.subject);

    req.userId = payload.subject;
    next();

}


const getCurrentTimeInIST = () => {
    // Get the current time in GMT
    const gmtTime = new Date();
  
    // Get the time offset for the IST time zone
    const timeOffset = gmtTime.getTimezoneOffset();
  
    // Calculate the IST time by subtracting the time offset from the GMT time
    const istTime = new Date(gmtTime - timeOffset * 60 * 1000);
  
    // Format the IST time as a string in the 12-hour clock format
    const formattedTime = istTime.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  
    // Return the formatted IST time with the "IST" string appended
    return `${formattedTime} IST`;
  };


//get all list (get) for data
router.get('/getall', async (req, res) => {

    try {
        
        let list = await DATA.find().sort({"Date":-1});

        console.log(`from getall job method`);
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
        const singledata = await DATA.findById(id);
        console.log(`from get with id job method `);
        res.send(singledata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//add data (post)
router.post('/post', async (req, res) => {

    try {
        // const DateNow = Date.now();
        let item = {

            Jobname: req.body.Jobname,
            CompanyName: req.body.CompanyName,
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
            // Date: Date(DateNow).toString(),
            Date: getCurrentTimeInIST(),
            ApplyStatus:1
        }
        const newdata = new DATA(item);
        const savedata = await newdata.save();
        console.log(`from post job method`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//for search home job data
router.post('/postSearch', async (req, res) => {

    // console.log(`from post search method : ${req.body.textData}`);

    try {


        const result = await DATA.aggregate(
            [
                {
                    $search: {
                        index: 'search',
                        text: {
                            query: req.body.textData,
                            path: {
                                'wildcard': '*'
                            }
                        }
                    }
                }
            ]

        ).sort({"Date":-1});

        res.send(result);




    } catch (error) {
        console.log(`error from post search method ${error}`);
    }

});



// delete data
router.delete('/delete/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await DATA.findByIdAndDelete(id);
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
      
        let item = { //remove 'data' from below if we not pass data object from frontend

            Jobname: req.body.data.Jobname,
            CompanyName: req.body.data.CompanyName,
            Place: req.body.data.Place,
            Salary: req.body.data.Salary,
            JobType: req.body.data.JobType,
            Qualifications: req.body.data.Qualifications,
            JobDescription: req.body.data.JobDescription,
            Experience: req.body.data.Experience,
            Benefits: req.body.data.Benefits,
            Schedule: req.body.data.Schedule,
            Language: req.body.data.Language,
            Contact: req.body.data.Contact
            
           
        }
        // console.log("incoming data from update", req.body);

        let updatedata = await DATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        // console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update data for ApplyStatus
router.put('/updateapply', async (req, res) => {

    try {let _id=req.body._id;
        let item={

            ApplyStatus:req.body.data
        }
        
        // console.log("incoming data from update", req.body);

        let updatedata = await DATA.findByIdAndUpdate(
            { "_id": _id },
            { $set: item }
        );
        // console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from put method ${error}`);
    }

});


module.exports = router;