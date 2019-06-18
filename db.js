const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo1', {useNewUrlParser: true})

let db = mongoose.connection;

db.once('open', () => {
    console.log('ok')
});

db.on('error', () => {
    console.log('err')
});

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
user.insertMany({
    userName: 'zhangsan',
    passWord: '123',
    age: 10,
    gender: 1,
    hobby: '抽烟，喝酒，烫头'
}).then(data => {
    console.log(data)
    console.log('插入成功')
}).catch(err => {
    console.log(err)
    console.log('插入失败')
})

user.find().then(data => {
    console.log(data)
    console.log('查询成功')
}).catch(err => {
    console.log('查询失败')
})

user.find({age: 11}).then(data => {
    console.log(data)
    console.log('查询成功')
}).catch(err => {
    console.log('查询失败')
})


user.remove().then(data => {
    console.log(data)
    console.log('删除成功')
}).catch(err => {
    console.log('删除失败')
})

user.update({age: 20}).then(data => {
    console.log(data)
    console.log('更新成功')
}).catch(err => {
    console.log(err)
    console.log('更新失败')
})