const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const people = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jim Doe'
    }
];

app.set('view engine', 'pug');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index', { serverPeople: people });
});

app.listen(port);