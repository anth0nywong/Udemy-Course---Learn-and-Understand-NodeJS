// ES6 -> new feature in V8 engine and JavaScript to deal with binary data

var buffer = new ArrayBuffer(8) // 8 bytes, utf-8 -> 64 bits

var view = new Int32Array(buffer); // Convert to Integer -> 32 bits
view[0] = 5;
view[1] = 10;

console.log(view);