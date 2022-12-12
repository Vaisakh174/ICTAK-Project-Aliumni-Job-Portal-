const express = require("express");
const router = express.Router();
const DATA = require("../../models/admin/createNewJob.js");

const jwt = require('jsonwebtoken')


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




// async function checkDate() {

//     let data = await DATA.find({ Date: { $lt: "2023-11-28T17:29:40.862+00:00" } })
//     if (data) {
//         for (let i = 0; i < data.length; i++) {
//             console.log(`error from check method ${data[i].ApplyStatus}`);
//             data[i].ApplyStatus = "false"
//             // console.log(`error from check method ${data}`);

//             await DATA.findByIdAndUpdate(
//                 { "_id": data[i]._id },
//                 { $set: data[i] }

//             );
//         }

//     }


// }

//get all list (get) for data
router.get('/getall', async (req, res) => {

    try {
        
        let list = await DATA.find();

        // console.log(`from get method ${list}`);
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
        console.log(`from get with id method ${singledata}`);
        res.send(singledata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//add data (post)
router.post('/post', async (req, res) => {

    try {
        const DateNow = Date.now();
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
            Date: Date(DateNow).toString(),
            ApplyStatus:1
        }
        const newdata = new DATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${item.Date}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//for search home job data
router.post('/postSearch', async (req, res) => {

    console.log(`from post search method : ${req.body.textData}`);

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

        )

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
        console.log(`from delete method ${deletedata}`);
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
            Date: Date(DateNow).toString(),
            // ApplyStatus:req.body.data.ApplyStatus
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
        console.log(`error from get method ${error}`);
    }

});


module.exports = router;