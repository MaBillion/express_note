let express = require('express');
let bodyParser = require('body-parser');
let userRouter = require('./router/userRouter');
let path = require('path');

let app = express();

app.use('/public', express.static(path.join(__dirname, './public')));

app.use('/', (req, res, next) => {
    let { token } = req.query;
    if (token) {
        next();
    } else {
        res.send({err: -1, msg: 'need login'})
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/user', userRouter);


app.listen('3001', () => {
    console.log('ok')
});