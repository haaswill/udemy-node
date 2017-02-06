function greet() {
    console.log('HI');
}
greet();

// functions are first-class
function logGreeting(fn) {
    fn();   
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi, there');
}

greetMe();

// It's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('Lololo');
});