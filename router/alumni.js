const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const alumniData = require("../models/alumni/alumniSchema.js")
// const data = require("../models/alumni/alumniloginschema.js")
//enter your code here 












//add data (post)
router.post('/new', async (req, res) => {


    const DateNow = Date.now();
    let item = {

        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        course: req.body.course,
        qualification: req.body.qualification,
        batch: req.body.batch,
        placement: req.body.placement,
        password: req.body.password,
        Date: Date(DateNow).toString()

    }
    alumniData.findOne({ email: item.email }, async (err, foundResults) => {

        console.log("data from signup body", foundResults, err)

        if (foundResults == null) {
            console.log("no matching email found");

            try {

                const newdata = new alumniData(item);
                const savedata = await newdata.save();
                // console.log(`from post method, signup ${savedata}`);
                // res.send(savedata);
                res.status(200).send({ savedata });

            } catch (error) {
                console.log(`error from post, signup method ${error}`);
            }


        }
        else {
            console.log("matching email found");
            res.status(401).send("Email already registered");


        }


    });
});









//add data (post)
router.post('/login', async (req, res) => {

    let emailf = req.body.email;
    let passwordf = req.body.password;
    console.log(emailf, passwordf);

    try {

        alumniData.findOne({ email: emailf }, (err, foundResults) => {

            console.log("error 400", foundResults, err)

            if (foundResults == null) {
                console.log("error 401 invalid email")

                res.status(401).send("invalid email or password");
            }

            else if (foundResults.password != passwordf) {
                console.log("error 401 invalid password")

                res.status(401).send("invalid password");

            }

            else {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let USER = foundResults.name;
                res.status(200).send({ token, USER });
            }
        })

    } catch (error) {
        console.log("error try login ", error)

    }


});






module.exports = router;