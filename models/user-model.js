const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service')

const User = database.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apiKey:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Verificar se DEV
if(config.ENV === 'dev'){
    User.sync({force:true}).then(()=>{
        User.create({
            username:'Rubens',
            password:'senha',
            firstName:'R',
            lastName:'R',
            apiKey:'999999999'
        });
        User.create({
            username:'basicUser',
            password:'basicPassword',
            firstName:'Basic',
            lastName:'User',
            apiKey:'123456789'
        });
        User.create({
            username:'test',
            password:'test',
            firstName:'Test',
            lastName:'User',
            apiKey:'987654321'
        });      
    });
}else{
    User.sync();
}


module.exports = User;