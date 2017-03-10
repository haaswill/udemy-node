const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
    
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/person/:name', function (req, res) {
        res.render('person', { name: req.params.name, qstr: req.query.qstr });
    });

    app.post('/person', urlencodedParser, function (req, res) {
        res.send('Thank you');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
};