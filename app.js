const express = require("express");
const app = new express();
const cors = require("cors");//communication
const logger = require("morgan");//to view api call on terminal
const GMT00 = require("./convertGMT00toIST.js");

// to pass data from frontend to backend.  use => while starting the app, use is executed
app.use(express.json());//json pair
app.use(express.urlencoded({ extended: true }));//json pair
app.use(cors());
app.use(logger("dev"));//morgan

// for env file
require ('dotenv').config();  

// mongodb
require("./mongoURI/mongodb.js");


// for hosting to herokku
const path = require('path');
app.use(express.static(path.join(__dirname + "/dist/frontend")));
// app.use(express.static("/dist/blog-case_study-2"));



// for api calls
const api = require("./router/api.js");
app.use("/api", api);

// for heroku
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});

// set port 
// const port = "api";
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`........port is now connected at ${port} ........`);
   console.log( GMT00.getCurrentTimeInIST());
});
