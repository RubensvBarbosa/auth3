const {getSecret} = require('../service/users-service')
const config = require('../service/config-service');



const auth = async (req, res, next)=> {
    var apiKey =await req.get(config.API_KEY_HEADER);
    console.log(apiKey);
    if (!apiKey ){
      res.sendStatus(401);
      return;
    }

    if(await getSecret(apiKey)){
      console.log('Autenticado');
      next();
    }else{
      console.log('Auth -> FALSE')
      res.status(401).json({ message: "Token is not valid"});
    }
    
};


module.exports = auth;