const express = require("express");
const router = express.Router();
const DATA= require('../models/employer/employerSchema');
//enter your code here 
const ITEM = require('../models/employer/jobpost')


router.post('/employersignup', async (req, res) => {
    try {
        let item = {
            name :req.body.name,
            companyname:req.body.companyname,
            email:req.body.email,
            phnno:req.body.phnno,
            password:req.body.password,
            designation:req.body.designation
        }
        let user = await DATA.findOne({ email: req.body.email })
        if (!user) {
            const newuser = new DATA(item)
            const saveuser = await newuser.save()
            res.send(saveuser)
        }
        return res.json({ message:"Email already registered" });
    } catch (error)
           {
        console.log('post error:',error)
           }
})
router.post('/emplogin', async (req, res) => {
    try {
        let user = await DATA.findOne({ 
            email: req.body.email, 
            password: req.body.password})
        if (!user) {
            return res.json({ message: "Invalid username or password" });
}
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

//to get joblist posted by employer
router.get('/joblist',async(req,res)=>{
    try {
        const list=await ITEM.find()
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})


router.get('/getOneJob/:id', async(req,res)=>{ // Get a single job by id
    try {
        let id = req.params.id
        let singleJob = await ITEM.findById(id)
        res.send(singleJob)
    } catch (error) {
        console.log('single error:',error);
    }
})
//to post job details


router.post('/jobpost',async(req,res)=>{
    try {
        console.log(req.body)
        let item={
            jobrole:req.body.jobrole,
            companyname:req.body.companyname,
            education:req.body.education,
            experience:req.body.experience,
            skills:req.body.skills,
            location:req.body.location,
            salary:req.body.salary,
            jobdescription:req.body.jobdescription
        }
        const newjobpost=new ITEM(item) 
        const savejobpost = await newjobpost.save()
        res.send(savejobpost)
    } catch (error) {
        console.log(error)
    }
})


router.put('/editJob', async(req, res)=>{  // update Job
    try {
        let id = req.body.id
        let updates = {
            jobrole:req.body.data.jobrole,
            companyname:req.body.data.companyname,
            education:req.body.data.education,
            experience:req.body.data.experience,
            skills:req.body.data.skills,
            location:req.body.data.location,
            salary:req.body.data.salary,
            jobdescription:req.body.data.jobdescription// data of updated jobs
        }
        let updateJob = {$set: updates}
        let updatedJob = await ITEM.findByIdAndUpdate({"_id": id}, updateJob,{new:true})
        res.send(updatedJob)
    } catch (error) {
        console.log('update error:',error);
    }
})







module.exports = router;