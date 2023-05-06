let fs = require('fs');

// Read file into buffer synchronously 
let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


// Read file into buffer asynchronously 
let greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('Done');