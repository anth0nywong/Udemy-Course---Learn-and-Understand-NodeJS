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