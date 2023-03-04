const multer = require("multer");








function checkdir() {
    fs.exists('../../Uploaded_Files', exists => {
        console.log(exists ? "The directory already exists"
            : "Not found!");
        if (!exists) {
            fs.mkdirSync('../../Uploaded_Files');

        }
    });
    // next();
}






//file upload
const storage = multer.diskStorage({

    destination: (req, file, callBack) => {
        callBack(null, 'Uploaded_Files') //host use
        // callBack(null,'Uploaded_Files') //local use
    },
    filename: (req, file, callBack) => {

        // console.log('cb')
        // console.log(file)


        callBack(null, `alumni_resp_${file.originalname}_${Date.now()}.pdf`)
    }
})

const upload = multer({ storage: storage })


module.exports = { upload }