const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const admin = require("../../models/admin/adminUsers.js");
const GMT00 = require("../../convertGMT00toIST.js");


const bcrypt = require('bcrypt');



//signup
// add data (post) for users
router.post('/signup', async (req, res) => {
    try {
        let item = {

            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            // Date: Date(DateNow).toString()
            Date: GMT00.getCurrentTimeInIST()
        }


        let foundResults = await admin.findOne({ email: item.email })

        // , async (err, foundResults) => {

        // console.log("data from signup body", foundResults)

        if (foundResults == null) {
            console.log("no matching email found");

            // // Hash the password
            // const salt = await bcrypt.genSalt(10);
            // const hashedPassword = await bcrypt.hash(item.password, salt);
            // item.password = hashedPassword;

            // const newdata = new admin(item);
            // const savedata = await newdata.save();
            // console.log(`from post method, signup ${savedata}`);


            res.status(200).send({ "status": 'Data Received and Waiting for Super Admin Approoval' });



        }
        else {
            console.log("matching email found");
            res.status(401).send("Email already registered");


        }
    } catch (error) {
        console.log(`error from post, admin signup method ${error}`);
    }

});


router.post("", async (req, res) => {

    let emailf = req.body.email;
    let passwordf = req.body.password;
    console.log(emailf, passwordf);

    try {

        let foundResults = await admin.findOne({ email: emailf })

        console.log(" foundResults: ", foundResults)

        if (foundResults == null) {
            console.log("error 401 invalid email")

            res.status(401).send("invalid email ");
        }

        else {
            const isMatch = bcrypt.compareSync(passwordf, foundResults.password);
            if (isMatch) {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let USER = foundResults.name;
                let admin_id = foundResults._id;
                res.status(200).send({ token: token, USER: USER, admin_id: admin_id });
            }
            else {
                console.log("error 401 invalid password")
                res.status(401).send("invalid password");
            }

        }
    } catch (error) {
        console.log("error try login ", error)

    }

});


module.exports = router;