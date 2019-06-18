const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo1', {useNewUrlParser: true})

let db = mongoose.connection;

db.once('open', () => {
    console.log('ok')
});

db.on('error', () => {
    console.log('err')
});