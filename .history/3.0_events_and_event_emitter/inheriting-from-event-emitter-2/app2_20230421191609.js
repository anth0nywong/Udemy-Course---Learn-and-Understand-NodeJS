let util = require('util');

function Person() {
    this.firstname = 'John',
    this.lastname = 'Doe'
}

Person.prototype.greet = function(){
    console.log('Hello' + this.firstname + ' ' + this.lastname)
}

function Policeman(){
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
let officer = new Policeman();
officer.greet();