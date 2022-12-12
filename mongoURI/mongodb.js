const mongoose = require("mongoose");

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,//to enable new features of mongidb
    useUnifiedTopology: true//to enable new features of mongidb
})
    .then(() => {
        console.log("mongodb is connected successfully");

    })
    .catch((err) => {
        console.log("mongodb not connected" + err);
    });
