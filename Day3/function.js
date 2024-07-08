function greet(message) {
    console.log(message)
}

greet('goodmorning')
greet('good afternoon')

// Add two numbers

function addTwoNumb(a,b) {
    console.log(a + b);

}
addTwoNumb(20, 30)


// Return function

function addInReturn(a,b,c) {
    return a + b + c ;

}
var val1 = addInReturn(20, 30, 40);
var val2 = addInReturn(50, 60, 80); 
console.log(val1 + val2); 


function add() {
    return 0;

}
add();



// four types of function
// * named function
// *IIFE function
// * anonymous functiion
// *arrow function



// IIFE function
(function () {
  console.log('Hello world');  //  code goes here

})();


(function (message) {
    console.log(message);
})('hello iam hajeera')


// Anonymus function
/*
()=>{}
function(){}
*/

var haji;
console.log(typeof haji);
haji = () => {
    console.log(typeof haji)
     return 10;
}
haji()
var result = haji()
console.log(result);


affu = () => {
    console.log('hello world how are you');
    return 10;
}

var value= affu()
console.log(value);










