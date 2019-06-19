let express = require('express');
let router = express.Router();
let user = require('../db/userModel.js');

/**
 * @api {post} /user/login 用户登录
 * @apiName login 用户登录
 * @apiGroup User
 *
 * @apiParam {String} userName 用户名
 * @apiParam {String} passWord 密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {Object} data 返回数据 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          name: '张三',
 *          age: 123
 *      }
 */

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

/**
 * @api {post} /user/register 用户注册
 * @apiName register 用户注册
 * @apiGroup User
 *
 * @apiParam {String} userName 用户名
 * @apiParam {String} passWord 密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {Object} data 返回数据 
 */

router.post('/register', (req, res) => {
    let {userName, passWord} = req.body;
    if (!userName || !passWord) return res.send({err: -1, msg: '数据错误'})

    user.find({userName})
    .then(data => {
        if (data.length > 0) {
            res.send({err: -2, msg: '该账号已被注册'})
            throw new Error();
        } else {
            return user.insertMany({
                userName,
                passWord
            })
        }
    }).then(data => {
        return res.send({err: 0, msg: '注册成功'})
    }).catch(err => {
        console.log(err)
    });
});

module.exports = router;