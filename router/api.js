
const express = require("express");
const router = express.Router();


// for api calls
const jobpost = require("./admin/cerateApost.js");
router.use("/jobpost", jobpost);

const approve = require("./admin/approvePostAPI.js");
router.use("/approve", approve);


const login = require("./admin/login.js");
router.use("/login", login);

const alumni = require("./alumni.js");
router.use("/alumni", alumni);

const employer = require("./employer.js");
router.use("/employer", employer);

const faculty = require("./faculty.js");
router.use("/faculty", faculty);



module.exports = router;