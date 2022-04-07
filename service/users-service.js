const User = require('../models/user-model');


// function to get the secret associated to the key id
async function getSecret(keyId, done) {
  const auth = await User.findOne({ where: { apiKey: `${keyId}` } });

  if (auth === null) {
    console.log(auth);
    return false;
  } else {
    console.log('AUTHHHHHHH ->',auth);
    return true;
  }
}
async function getAll() {  
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  return users
};


async function updateUser(key,chave){
  const find =await User.find({ where: { apiKey: `${key}` } });
  
  console.log(find);
  
  /*
  .on('success', function (project) {
    // Check if record exists in db
    if (project) {
      project.update({
        apiKey: `${chave}`
      })
      .success(function () {})
    }
  })*/
};



async function createUser() {

  const user = await User.create({
    username: "basicUser",    
    password: "basicPassword",
    firstName: "Lab",
    lastName: "User",
    apiKey: "123456789"

  })

  return user;

}

module.exports = {getSecret,createUser,getAll,updateUser};