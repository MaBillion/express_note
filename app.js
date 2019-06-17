let express = require('express');
let bodyParser = require('body-parser');
let userRouter = require('./router/userRouter');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/user', userRouter);

app.get('/user/login', (req, res) => {
    console.log(req.query)
    res.send('ok')
});

app.post('/user/register', (req, res) => {
    console.log(req.body)
    res.send({err: 0, msg: 'ok'})
});


app.listen('3001', () => {
    console.log('ok')
});