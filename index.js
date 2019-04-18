
const express = require('express');
const app = express();
const uuidv1 = require('uuid/v1');
app.get('/', function (req, res) {
    res.send('Hello World!');
});

const _password = 'd98jXpL9FDJjfbXWXJYzdX3MHFT5D8CDZpZnC5J7LgU6GbuWg8HmXCkpfKCt23nvzfw79bDnUfVsHL5PQwAusMNL4SeH5gjB74X9eAf68V8ys4xx79ghdEhQAfMGsafa';
app.get('/get_video_record', function (req, res) {
    try {
        let uid = req.query.uid;
        let token = req.query.token;
        if (All[uid][token]) {
            const t = JSON.parse(JSON.stringify(All[uid][token]));
            console.log(t)
            res.sendFile(__dirname + '/' + t);
            setTimeout(()=>{delete (All[uid][token]);},3000)
        } else {
            res.send(null);
        }
    }catch(ex){
        console.log('no')
    }
});

let All = new Object();
app.get('/get_video_token', function (req, res) {

    let video_name = req.query.video_name;
    let user_uid = req.query.user_uid;
    console.log(req.query.video_name);
    let uuid=uuidv1();

    All[user_uid] = new Object();
    All[user_uid][uuid] = video_name;
    res.send({token:uuid});
    console.log(All);
});
app.listen(7542, function () {
    console.log('Example app listening on port 7542!');
});