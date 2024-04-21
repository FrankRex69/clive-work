exports.getToken = (req: any, res: any, next: any) => {  

    const jwt = require('.././middleware/jwt');    
    
    let token: any = jwt.setToken(req.body.username,req.body.password);
    let payload = jwt.getPayload(token);
    
    res.json(
        {
            token: token,
            payload: payload
        }
    );

}