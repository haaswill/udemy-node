module.exports = function (app) {
    app.get('/api/person/:id', function (req, res) {
        //get that data from database
        res.json({ firstname: 'John', lastname: 'Doe' });
    });

    app.post('/api/person', function (req, res) {
        res.send('Thank you for the json data');
        //save to database
    });

    app.delete('api/person/:id', function (req, res) {
        //delete from database
    });
}