const jwt = require('jsonwebtoken')


//middleware
function verifytoken(req, res, next) {
    // console.log('headers=', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send('Unautherized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unautherized request');
    }
    let payload = jwt.verify(token, 'secretkey');
    // console.log("payload=", payload);
    if (!payload) {
        return res.status(401).send('Unautherized request');
    }
    // console.log("payload.subject=", payload.subject);

    req.userId = payload.subject;
    next();

}

module.exports={verifytoken};