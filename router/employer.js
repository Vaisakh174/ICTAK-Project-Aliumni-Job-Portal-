const express = require("express");
const router = express.Router();
const DATA = require('../models/employer/employerSchema');
//enter your code here 
const ITEM = require('../models/employer/jobpost')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const OTP = require('../models/otpmodel');
const verifier=require('../tokenVerifier')


//registration
router.post('/employersignup', async (req, res) => {
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
                companyname: req.body.companyname,
                email: req.body.email,
                phnno: req.body.phnno,
                password: req.body.password,
                designation: req.body.designation
            }
            let user = await DATA.findOne({ email: req.body.email })
            if (!user) {
                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(item.password, salt);
                item.password = hashedPassword;
                //Create new user
                const newuser = new DATA(item)
                const saveuser = await newuser.save()

                //delete otp from db
                await OTP.findByIdAndDelete(otpFromDatabase._id)


                res.status(200).send({ message: 'Registration Successful' });
            } else {
                res.status(401).send({ message: "Email already registered" });
            }
        }
    } catch (error) {
        console.log('post error:', error)
    }
})

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

//login
router.post('/emplogin', async (req, res) => {
    try {
        let user = await DATA.findOne({ email: req.body.email })
        if (!user) {
            res.status(401).send({ message: "Invalid Email" });
        }
        else {
            const isMatch = bcrypt.compareSync(req.body.password, user.password);

            if (isMatch) {
                console.log("success login with jwt user", user.name)
                let payload = { subject: user.email + user.password }
                let token = jwt.sign(payload, "secretkey");
                let employer_name = user.name;
                res.status(200).send({ token: token, employer_name: employer_name, message: 'Login Success' });
            }
            else {
                console.log("error 401 invalid password")
                res.status(401).send({ message: "invalid password" });
            }
        }

    } catch (error) {
        console.log(error)
    }
})

//to get joblist posted by employer
router.get('/joblist', async (req, res) => {
    try {
        const list = await ITEM.find()
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})


router.get('/getOneJob/:id', async (req, res) => { // Get a single job by id
    try {
        let id = req.params.id
        let singleJob = await ITEM.findById(id)
        res.send(singleJob)
    } catch (error) {
        console.log('single error:', error);
    }
})
//to post job details


router.post('/jobpost', async (req, res) => {
    try {
        console.log(req.body)
        let item = {
            jobrole: req.body.jobrole,
            companyname: req.body.companyname,
            education: req.body.education,
            experience: req.body.experience,
            skills: req.body.skills,
            location: req.body.location,
            salary: req.body.salary,
            jobdescription: req.body.jobdescription
        }
        const newjobpost = new ITEM(item)
        const savejobpost = await newjobpost.save()
        res.send(savejobpost)
    } catch (error) {
        console.log(error)
    }
})


router.put('/editJob', async (req, res) => {  // update Job
    try {
        let id = req.body.id
        let updates = {
            jobrole: req.body.data.jobrole,
            companyname: req.body.data.companyname,
            education: req.body.data.education,
            experience: req.body.data.experience,
            skills: req.body.data.skills,
            location: req.body.data.location,
            salary: req.body.data.salary,
            jobdescription: req.body.data.jobdescription// data of updated jobs
        }
        let updateJob = { $set: updates }
        let updatedJob = await ITEM.findByIdAndUpdate({ "_id": id }, updateJob, { new: true })
        res.send(updatedJob)
    } catch (error) {
        console.log('update error:', error);
    }
})







module.exports = router;