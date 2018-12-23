const mongoose = require('mongoose');
const config = require('../contanst/config');

class DBContext {
    constructor() {
        //Connect MongoDb
        mongoose.Promise = global.Promise;
        mongoose.connect(config.dbConnectStr, { useMongoClient: true });
        var db = mongoose.connection;

        db.on('error', () => {
            console.log('MongoDb connection error');
        });

        db.on('connected', () => {
            console.log('MongoDb connection success');
        });

        db.on('disconnected', () => {
            console.log('MongoDb connection success');
        });
    }

    initDatabase() {
        //Initialize models
        require('./users');
        return this;
    }

    testInsertUser() {
        //Test insert MongoDb
        var user = {
            first_name: 'Minh Thong',
            last_name: 'Truong',
            user_name: 'minhthong',
            password: '123456',
            role: 'admin'
        };
        const UserService = require('../services/userService');
        const userService = new UserService();
        userService.signUp(user)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }
}

module.exports = DBContext;


