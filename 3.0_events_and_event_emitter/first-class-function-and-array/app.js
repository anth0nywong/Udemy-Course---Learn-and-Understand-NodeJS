let obj = {
  greet: "Hello",
};

console.log(obj.greet);
console.log(obj["greet"]);

let prop = "greet";
console.log(obj[prop]);

// functions and arrays
let arr = [];

arr.push(function () {
  console.log("Hello World 1");
});
arr.push(function () {
  console.log("Hello World 2");
});
arr.push(function () {
  console.log("Hello World 3");
});
// Call each function in array
arr.forEach(function(item){
    item();
})
