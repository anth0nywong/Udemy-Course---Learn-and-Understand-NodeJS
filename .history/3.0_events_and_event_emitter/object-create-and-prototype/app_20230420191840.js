let person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname
    }
}

let john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

let jane = Object.create(person);
jane.firstname = 'Jane';
jame.lastname = 'Doe';

console.log(john.greet);
console.log(jane.greet);