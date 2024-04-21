let jwt = require('jsonwebtoken');
import { json } from 'body-parser';
import fs from 'fs';
import { JsonWebTokenError } from 'jsonwebtoken';

let option:
{
    "algorithm": "RS256",
    "expiresIn": "10d"
}

let getPayload = (token: any) => {

    let decode = jwt.decode(token, {complete: true});
    return decode.payload;

}

let setToken = (username: any, password: any)=>{
     
    let payload = String({username: username, password: password});   
    
    //const chiaveprivata = fs.readFileSync('/etc/letsencrypt/live/www.collaudolive.com/privkey.pem');
    const chiaveprivata = 'qwwrewrt23423432423';
    let token = jwt.sign(payload, chiaveprivata, option);
    
    return token;
}

let checkToken = (token: any) => {
    //let chiavePubblica = fs.readFileSync('/etc/letsencrypt/live/www.collaudolive.com/cert.pem');
    const chiavePubblica = 'qwwrewrt23423432423';  
    return jwt.verify(token, chiavePubblica, option)
}

module.exports = {
    setToken,
    getPayload,
    checkToken
}