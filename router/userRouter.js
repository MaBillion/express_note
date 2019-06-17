let express = require('express');
let router = express.Router();

router.get('/add', (req, res) => {
    console.log(req)
    res.send('add')
});

router.get('/del', (req, res) => {
    console.log(res)
    res.send('del')
});

module.exports = router;