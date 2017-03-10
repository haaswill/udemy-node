var obj = {
    name: 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' }); // Comma separated list of parameters
obj.greet.apply({ name: 'Jane Doe' }); // Array of parameters