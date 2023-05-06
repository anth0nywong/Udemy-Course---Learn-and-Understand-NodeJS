let fs = require('fs');
let zlib = require('zlib');

// highWaterMark define the size of buffer
let readable = fs.createReadStream(__dirname + '/greet.txt', {encoding:'utf8', highWaterMark: 16 * 1024});

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// Transform the stream into compressed version
let gzip = zlib.createGzip();

readable.pipe(writable);

// method chaining/
readable.pipe(gzip).pipe(compressed);