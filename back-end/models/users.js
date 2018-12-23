var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema (
    {
        first_name: {type: String, required: false, max: 256},
        last_name: {type: String, required: false, max: 256},
        user_name: {type: String, require : true, max: 256},
        password: {type: String, required : true},
        role: {type: String, require: true }
    }
);

module.exports = mongoose.model('Users', UserSchema);