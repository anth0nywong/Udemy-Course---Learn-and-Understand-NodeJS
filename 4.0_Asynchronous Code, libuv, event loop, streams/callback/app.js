function greet(callback){
    console.log('Hello');

    var data = {
        name: 'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('The callback was invoke!');
    console.log(data);
});

greet(function(data){
    console.log('Second callback was invoke!');
    console.log(data);
});