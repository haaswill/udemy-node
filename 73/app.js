const express = require('express');
//const mysql = require('mysql');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://test:test@ds145389.mlab.com:45389/addressbook');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

const Person = mongoose.model('Person', personSchema);

const john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: 'lalaland'
});

//save the user
john.save(function (err) {
    if (err) throw err;
    console.log('person saved');
});

const jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: 'lalaland'
});

//save the user
jane.save(function (err) {
    if (err) throw err;
    console.log('person saved');
});

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    //
    // EXAMPLE OF MYSQL QUERY
    //
    // const con = mysql.createConnection({
    //     host: "localhost",
    //     user: "test",
    //     password: "test",
    //     database: "addressbook"
    // });

    // con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID', function (err, rows) {
    //     if (err) throw err;
    //     console.log(rows);
    // });
    
    //get all users
    Person.find({}, function (err, users) {
        if (err) throw err;
        //object of all the users
        console.log(users);
    })

    next();
});

htmlController(app);
apiController(app);

app.listen(port);