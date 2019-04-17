
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const _password = 'd98jXpL9FDJjfbXWXJYzdX3MHFT5D8CDZpZnC5J7LgU6GbuWg8HmXCkpfKCt23nvzfw79bDnUfVsHL5PQwAusMNL4SeH5gjB74X9eAf68V8ys4xx79ghdEhQAfMGsafa';
app.get('/get_video_record', function (req, res) {
    console.log(req.query.name);
    console.log(req.query.password);
    let name = req.query.name;
    let password = req.query.password;
    if(password ===_password){
        res.sendFile(__dirname+'/'+name);
    }
});
app.listen(7542, function () {
    console.log('Example app listening on port 7542!');
});