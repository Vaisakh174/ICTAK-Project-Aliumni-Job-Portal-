const jwt = require('jsonwebtoken')


//middleware
function verifytoken(req, res, next) {
    try {
        // console.log('headers=', req.headers);
        if (!req.headers.authorization) {
            return res.status(401).send({ message: 'Unautherized request' });
        }
        let token = req.headers.authorization.split(' ')[1];
        // console.log("token: ", token)
        if (token == 'null') {
            return res.status(401).send({ message: 'Unautherized request' });
        }
        let payload = jwt.verify(token, 'secretkey');
        // console.log("payload=", payload);
        // Token is valid, perform actions with payload
        if (!payload) {
            return res.status(401).send({ message: 'Unautherized request' });
        }
        // req.user_id=payload.subject
        // console.log("payload.subject=", payload.subject);
        next();
    } catch (err) {
        // Token is invalid, handle the error
        // console.log('catched: ',err);
        return res.status(401).send({ message: 'invalid token' });
    }
}

module.exports = { verifytoken };