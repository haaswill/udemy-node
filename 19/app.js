const EventEmitter = require('events');
const util = require('util');

function Greetr() {
    // Super constructor
    // add all properties from EventEmitter to this object
    EventEmitter.call(this);
    this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log('Someone greeted! ' + data);
});

greeter1.greet('Will');