const express = require('express');
const fs = require('fs');
var morgan = require('morgan')
const PORT = 8080;
const app = express();

app.use(express.static('public'));
app.use(morgan('combined'));

app.get('/', function (req, res) {
    fs.readFile('./public/index.html', (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.listen(PORT, function () {
    console.log(`Example app is listening on port ${PORT}`);
});

