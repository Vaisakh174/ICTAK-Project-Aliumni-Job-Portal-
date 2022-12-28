
const approvePost = require("../../models/admin/approvePost.js");
const GMT00 = require("../../convertGMT00toIST.js");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage')
const promise = require('promise');
var MONGOURI = process.env.mongoURI;


const conn = mongoose.createConnection(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })


let gfg;
conn.once("open", (err, res) => {
    try {
        gfg = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "pdf_uploads" })
        console.log('GridFS Connected Successfully ');
    }
    catch (err) {
        res.json({ err: message })
        console.log('GridFS err 35', err);
    }
})



const storage = new GridFsStorage({
    url: MONGOURI,
    file: (req, file) => {
        return new promise((resolve, reject) => {

            const filename = file.originalname;
            const fileDetails = {
                filename: filename + '_' + Date.now() + '.pdf',
                bucketName: "pdf_uploads"
            };
            resolve(fileDetails)

        })
    }
})

const upload = multer({ storage });




// router.get('/',(req,res) => {

//    // res.render("../views/upload", {titleHead : "Lets Upload Files"} );

//     if(!gfg)
//     {
//         res.send("Error occured to connect to DB")
//         process.exit(0);
//     }
//     gfg.find().toArray((err,files) => {
//         if(!files || files.length === 0 )
//         {
//             res.render('../views/upload.ejs', {files : false})
//         }
//         else
//         {
//             const checkFile = files
//                 .map(file => {
//                 if(file.contentType === 'image/png' || file.contentType === "image/jpeg" )
//                 {
//                     file.isImage = true
//                 }
//                 else
//                 {
//                     file.isImage = false
//                 }
//                 return file
//                 } )


//             return res.render('../views/upload.ejs ', {
//                 files : checkFile,
//                  titleHead : "Lets Upload Files"
//               } )
//         }
//     } )

// } );


router.post('/', upload.single('file'), async (req, res) => {

    try {
        const file = req.file;


        console.log("upld file: ", file.filename);

        let postData = JSON.parse(req.body.postData);
        let alumniData = JSON.parse(req.body.alumniData);

        if (!file) {

            res.send({ "statuss": "Upload Error" });

        }
        else {

            let item = {

                JobID: postData._id,
                Jobname: postData.Jobname,
                Place: postData.Place,
                Salary: postData.Salary,
                JobType: postData.JobType,
                Qualifications: postData.Qualifications,
                JobDescription: postData.JobDescription,
                Experience: postData.Experience,
                Benefits: postData.Benefits,
                Schedule: postData.Schedule,
                Language: postData.Language,
                Contact: postData.Contact,
                CompanyName: postData.CompanyName,


                Alumni_name: alumniData.Alumni_name,
                Alumni_phone: alumniData.Alumni_phone,
                Alumni_email: alumniData.Alumni_email,
                Alumni_qualification: alumniData.Alumni_qualification,
                Alumni_Experience: alumniData.Alumni_Experience,
                Alumni_course: alumniData.Alumni_course,
                Alumni_branch: alumniData.Alumni_branch,
                Alumni_Placement: alumniData.Alumni_Placement,
                Placed_company: alumniData.Placed_company,
                filename: req.file.filename,
                Date: GMT00.getCurrentTimeInIST()

            }

            const newdata = new approvePost(item);
            const savedata = await newdata.save();
            console.log('from apply method saved data.jobname: ', savedata.Jobname);

            res.send({ "statuss": "Upload Success" });


        }
    } catch (error) {
        console.log("Err 123 file upload ");
        console.log(error);

    }




});





router.get('/:filename', async (req, res) => {
    await gfg.find({ filename: req.params.filename })
        .toArray((err, files) => {
            if (!files || files.length === 0) {
                console.log('No file found line no: 167');
                return res.status(404).send({ err: "No such file exist" });
            }
            let Filename=req.params.filename;
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename="${Filename}"`);
            
            gfg.openDownloadStreamByName(Filename).pipe(res);
            console.log('File found, name1: ', files[0]);
        });
});


router.post('/del', (req, res) => {
    gfg.delete(mongoose.Types.ObjectId(req.body.filename), (err, res) => {
        if (err) {
            res.status(404).json({
                err: err.message
            })
        }
        else {
            res.status(200).send("File Deleted")
        }
    })
})

module.exports = router;