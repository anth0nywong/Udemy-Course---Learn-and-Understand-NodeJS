let fs = require('fs');
console.log(__dirname);
let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);