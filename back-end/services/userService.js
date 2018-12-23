const mongoose = require('mongoose');
const Users = mongoose.model('Users');

class UserService {
    constructor() {

    }

    signUp(user) {
        return new Promise((resolve, reject) => {
            var userDB = new Users();
            userDB.first_name = user.first_name;
            userDB.last_name = user.last_name;
            userDB.user_name = user.user_name;
            userDB.password = user.password;
            userDB.role = user.role;
            userDB.save((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(userDB);
                }
            });
        })
    }
}

module.exports = UserService;
