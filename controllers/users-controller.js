const {createUser,getAll,updateUser} = require('../service/users-service');


const list = async (req,res,next) => {
    const data = await getAll();  
    console.log(data);
    res.json(data);
};

const update = async (req,res,next) =>{
    const {key} =await req.params;
    const {chave}  = await req.body;
   
   if(await updateUser(key,chave)){
       console.log('Success update');
       res.status(200).json({ message: "Success update"});
   }else{
        console.log('Fail update')
        res.status(401).json({ message: "Fail update"});
   }
   
   
   
   
   
   
    /*
    if (!apiKey ){
        res.sendStatus(401).json({ message: "Token not existed"});
        return;
    }

    if(await updateUser(apiKey)){
    console.log('Autenticado');

    }else{
    console.log('Auth -> FALSE')
    res.status(401).json({ message: "Token is not valid"});
    }
    */


};


const create = async (req, res, next) => {

    const newUser = await createUser();

    res.json(newUser);

};



module.exports = {list,create,update};