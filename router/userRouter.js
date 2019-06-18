let express = require('express');
let router = express.Router();
let user = require('../db/userModel.js');

router.post('/login', (req, res) => {
    let {userName, passWord} = req.body;
    if (!userName || !passWord) return res.send({err: -1, msg: '用户名或密码错误'})

    user.find({userName, passWord}).then(data => {
        if (data.length > 0) {
            return res.send({err: 0, msg: '登录成功'})
        } else {
            return res.send({err: -1, msg: '用户名或密码错误'})
        }
    }).catch(err => {
        return res.send({err: -1, msg: '用户名或密码错误'})
    })
});

router.post('/register', async (req, res) => {
    let {userName, passWord} = req.body;
    if (!userName || !passWord) return res.send({err: -1, msg: '数据错误'})

    await user.find({userName}).then(data => {
        if (data.length > 0) {
            return res.send({err: -2, msg: '该账号已被注册'})
        } else {
            user.insertMany({
                userName,
                passWord
            }).then(data => {
                return res.send({err: 0, msg: '注册成功'})
            }).catch(err => {
                return res.send({err: 100, msg: '请稍后再试'})
            })
        }
    })
});

module.exports = router;