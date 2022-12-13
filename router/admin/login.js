const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const admin = require("../../models/admin/adminUsers.js");



//signup
// add data (post) for users
router.post('/signup', async (req, res) => {
    const DateNow = Date.now();
    let item = {

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        Date: Date(DateNow).toString()

    }


    let foundResults=await admin.findOne({ email: item.email })
        
        // , async (err, foundResults) => {

        // console.log("data from signup body", foundResults)
        
        if (foundResults == null) {
            console.log("no matching email found");

        //     try {
 
        //         // const newdata = new adminappr(item);
        //         // const savedata = await newdata.save();
        //         // console.log(`from post method, signup ${savedata}`);
        //         // res.send(savedata);
    
                res.status(200).send({"status":'Data Received and Waiting for Super Admin Approoval'});

        //     } catch (error) {
        //         console.log(`error from post, signup method ${error}`);
        //     }


        }
        else {
            console.log("matching email found");
            res.status(401).send("Email already registered");


        } 


    // });


});


//login
// let email = "vaishakh174@gmail.com"
// let password = "12345"

router.post("", async (req, res) => {

    let emailf = req.body.email;
    let passwordf = req.body.password;
    console.log(emailf, passwordf);

    try {

        admin.findOne({ email: emailf }, (err, foundResults) => {

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