const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const alumniData = require("../models/alumni/alumniSchema.js")
// const data = require("../models/alumni/alumniloginschema.js")

const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const OTP = require('../models/otpmodel');
const verifier=require('../tokenVerifier')



//add data (post)
router.post('/new', async (req, res) => {

    try {
        //otp verification
        const otpFromDatabase = await OTP.findOne({ email: req.body.email }).sort({ "_id": -1 });
        const isOtpExpired = (Date.now() - otpFromDatabase.timestamp) > (2 * 60 * 1000); // 2 minutes

        if (otpFromDatabase == null) {
            res.status(401).send({ message: 'OTP not found with your email ' });
        }
        else if (isOtpExpired) {
            // handle error: OTP is  expired
            // await OTP.findByIdAndDelete(otpFromDatabase._id)
            res.status(401).send({ message: 'OTP is expired ' });
        }
        else if (otpFromDatabase.otp !== req.body.otp) {
            // handle error: OTP is  invalid
            res.status(401).send({ message: 'OTP is invalid' });
        } else {
            // handle success: OTP is valid and not expired
            // res.status(200).send({ message: 'OTP send Success' });

            let item = {

                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                course: req.body.course,
                qualification: req.body.qualification,
                batch: req.body.batch,
                placement: req.body.placement,
                password: req.body.password
            }
            let foundResults = await alumniData.findOne({ email: item.email })

            console.log("foundResults: ", foundResults)

            if (foundResults == null) {
                console.log("no matching email found");
                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(item.password, salt);
                item.password = hashedPassword;

                const newdata = new alumniData(item);
                const savedata = await newdata.save();
                // console.log(`from post method, signup ${savedata}`);

                res.status(200).send({ message: 'Success' });

            }
            else {
                console.log("matching email found");
                res.status(401).send({ message: "Email already registered" });
            }
        }
    } catch (error) {
        console.log(`error from post, alumni signup method ${error}`);
    }

});


//add data (post)
router.post('/login', async (req, res) => {
    try {
        let emailf = req.body.email;
        let passwordf = req.body.password;
        console.log(emailf, passwordf);



        let foundResults = await alumniData.findOne({ email: emailf })

        console.log("foundResults: ", foundResults)

        if (foundResults == null) {
            console.log("error 401 invalid email")

            res.status(401).send({ message: "invalid email" });
        }
        else {
            const isMatch = bcrypt.compareSync(passwordf, foundResults.password);
            if (isMatch) {
                console.log("success login with jwt user", foundResults.name)
                let payload = { subject: emailf + passwordf }
                let token = jwt.sign(payload, "secretkey");
                let name = foundResults.name;
                res.status(200).send({ alumni_token: token, alumni_name: name, message: 'Login Success' });
            }
            else {
                console.log("error 401 invalid password")
                res.status(401).send({ message: "invalid password" });
            }
        }


    } catch (error) {
        console.log("error try login ", error)

    }

});


//otp verify
router.post("/verify", async (req, res) => {
    try {

        //otp verification
        const otpFromDatabase = await OTP.findOne({ email: req.body.email }).sort({ "_id": -1 });
        const isOtpExpired = (Date.now() - otpFromDatabase.timestamp) > (2 * 60 * 1000); // 2 minutes

        if (otpFromDatabase == null) {
            res.status(401).send({ message: 'OTP not found with your email ' });
        }
        else if (isOtpExpired) {
            // handle error: OTP is  expired
            console.log('isOtpExpired: ', isOtpExpired)
            res.status(401).send({ message: 'OTP is expired ' });
        }
        else if (otpFromDatabase.otp !== req.body.otp) {
            // handle error: OTP is  invalid
            res.status(401).send({ message: 'OTP is invalid' });
        } else {
            // handle success: OTP is valid and not expired
            res.status(200).send({ message: 'OTP is verified' });
        }
    } catch (error) {
        console.log("error try otp verify ", error)
    }

});



//otp generation and send  to email,DB
router.post("/otp", async (req, res) => {
    try {

        //new otp gen...
        const otpObject = {
            email: req.body.email,
            otp: randomstring.generate({
                length: 6,
                charset: 'numeric'
            }),
            timestamp: Date.now()

        };
        // console.log(otpObject)
        // check email already in db or not
        let foundResults = await OTP.findOne({ email: req.body.email }).sort({ "_id": -1 });
        // console.log("foundresults : ", foundResults)
        if (foundResults == null) {
            console.log("email not found")

            //save otp to DB
            const newdata = new OTP(otpObject);
            const savedata = await newdata.save();
            console.log(`from post method, OTP: ${savedata}`);
            // res.status(200).send({ message: 'OTP send Success' });

        }
        else {
            //update new otp to db
            await OTP.findByIdAndUpdate(
                { "_id": foundResults._id },
                { $set: otpObject }
            )

        }

        //send otp email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.emailPassword
            }
        });
        const mailOptions = {
            from: process.env.email,
            to: req.body.email,
            subject: 'OTP for email verification',
            // text: `Your OTP is ${otpObject.otp} `,
            html: `<h1> Your OTP is: <i> ${otpObject.otp} </i></h1>
             <br><br><br>
              <h3>(Please note, you have only 2 minutes to verify your OTP)</h3>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(401).send({ message: 'OTP send Failed' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send({ message: 'OTP is send To Your Mail' });
            }
        });

    }

    catch (error) {
        console.log("error try otp generation ", error)
    }

});



module.exports = router;