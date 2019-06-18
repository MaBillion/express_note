let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    },
    age: Number,
    gender: {
        type: Number,
        default: 0
    },
    hobby: String
})

let user = mongoose.model('user', UserSchema);

module.exports = user;