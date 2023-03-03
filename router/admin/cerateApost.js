const express = require("express");
const router = express.Router();
const DATA = require("../../models/admin/createNewJob.js");
const GMT00 = require("../../convertGMT00toIST.js");
const jwt = require('jsonwebtoken')
const verifier = require('../../tokenVerifier')




//get all list (get) for data
router.get('/getall', async (req, res) => {

    try {
        let currentDate = new Date(GMT00.getCurrentTimeInIST().replace('IST', ''));
        let updatedata = await DATA.updateMany({ LastDate: { $lt: currentDate } }, { ApplyStatus: 0 })
        console.log('updatedata getall job:', updatedata)
        let list = await DATA.find().sort({ "LastDate": -1 });

        // console.log(`from getall job method`,list);
        res.status(200).send(list);
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
        res.status(200).send(singledata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//add data (post)
router.post('/post', verifier.verifytoken, async (req, res) => {

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
            LastDate: new Date(req.body.LastDate),
            Date: GMT00.getCurrentTimeInIST(),
            ApplyStatus: 1
        }
        const newdata = new DATA(item);
        const savedata = await newdata.save();
        console.log(`from post job method`, item.LastDate);
        res.status(200).json("savedata");

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

        ).sort({ "Date": -1 });

        res.status(200).send(result);




    } catch (error) {
        console.log(`error from post search method ${error}`);
    }

});



// delete data
router.delete('/delete/:id', verifier.verifytoken, async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await DATA.findByIdAndDelete(id);
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
            Contact: req.body.data.Contact,
            LastDate: new Date(req.body.data.LastDate)


        }
        // console.log("incoming data from update", req.body);

        let updatedata = await DATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        // console.log(`from put method old data ${updatedata}`);
        res.status(200).send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// // update data for ApplyStatus
// router.put('/updateapply', async (req, res) => {

//     try {
//         let _id = req.body._id;
//         let item = {

//             ApplyStatus: req.body.data
//         }

//         // console.log("incoming data from update", req.body);

//         let updatedata = await DATA.findByIdAndUpdate(
//             { "_id": _id },
//             { $set: item }
//         );
//         // console.log(`from put method old data ${updatedata}`);
//         res.status(200).send(updatedata);

//     } catch (error) {
//         console.log(`error from put method ${error}`);
//     }

// });


module.exports = router;