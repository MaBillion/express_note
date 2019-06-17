let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let fs = require('fs');

router.get('/login', async (req, res) => {
    await fs.readFile('./public/bbb.jpeg', (err, data) => {
        res.set({'content-type': 'image/jpeg'});
        res.send(data)
    });
});

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('del')
});

module.exports = router;