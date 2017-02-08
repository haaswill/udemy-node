var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function () {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function () {
    console.log('A greeting occured');
});

console.log('hello');
emtr.emit('greet');