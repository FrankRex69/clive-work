exports.checkAuth = (req: any, res: any, next: any)=>{    
    
    console.log(req.headers['authorization']);
    

    const jwtRecall = require('./jwt');

    try {
        if(req.headers['authorization'] == null){
            console.log('aaaaa');
            
            res.sendStatus(401);
        }
        else
        {
            let token = req.headers['authorization'];            
              
            // token = token.slice(7,token.length);
            jwtRecall.checkToken(token);     
            next();
        }        
    } catch (err) {
        // console.log(err.message);
        console.log('bbbbb');
        res.sendStatus(401);
    }

    
}