let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let fs = require('fs');
let { _readFile } = require('../tools/tools.js');

router.get('/login', async (req, res) => {
    await fs.readFile('./public/bbb.jpeg', (err, data) => {
        res.set({'content-type': 'image/jpeg'});
        res.send(data)
    });
});

router.post('/register', (req, res) => {
    _readFile('./public/hello.html').then(data => {
        res.send(data)
    }).catch(err => {
        throw err
    })
});

module.exports = router;