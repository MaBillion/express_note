const express = require('express');
const router = express.Router();
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        let files = file.originalname.split('.')
        cb(null, Date.now() + parseInt(Math.random() * 1000) + '.' + files[files.length - 1])
    }
})

var upload = multer({ storage: storage })

router.post('/imageFile', upload.single('image'), (req, res) => {
    let types = ['png', 'jpeg', 'jpg', 'gif'];
    let { mimetype, size } = req.file
    if (types.includes(mimetype.split('/')[1]) !== true) {
        res.send({err: -1, msg: '类型错误'})
    } else if (size > 1024 * 1000) {
        res.send({err: -1, msg: '文件过大'})
    } else {
        res.send('ok')
    }
})

module.exports = router;