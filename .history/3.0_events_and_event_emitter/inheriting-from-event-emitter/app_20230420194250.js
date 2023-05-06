let EventEmitter = require("events");
let util = require("util");

function Greetr() {
  this.greeting = "Hello World!";
}

// Inherit Greetr from Event Emitter, make emit and on available
util.inherits(Greetr, EventEmitter);

// Has an empty prototype object between Greetr and EventEmitter
Greetr.prototype.greet = function (data) {
  console.log(this.greeting + ": " + data);
  this.emit('greet', data);
};

let greeter1 = new Greetr();

greeter1.on('greet', function(){
    console.log('Someone Greet: ' + data);
})

greeter1.greet();
