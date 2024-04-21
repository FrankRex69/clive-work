"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let jwt = require('jsonwebtoken');
let option = {
    algorithm: "RS256",
    expiresIn: "1h"
};
let getPayload = (token) => {
    let decode = jwt.decode(token, { complete: true });
    return decode.payload;
};
let setToken = (username, password) => {
    let payload = { username: username, password: password };
    //let chiaveprivata = fs.readFileSync('/etc/letsencrypt/live/www.collaudolive.com/privkey.pem');
    let token = jwt.sign(payload, option);
    return token;
};
let checkToken = (token) => {
    //let chiavePubblica = fs.readFileSync('/etc/letsencrypt/live/www.collaudolive.com/cert.pem');
    return jwt.verify(token, option);
};
module.exports = {
    setToken,
    getPayload,
    checkToken
};
