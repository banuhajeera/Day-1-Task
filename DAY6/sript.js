
// Basic for loop

for (x = 1; x <= 10; x++){
    console.log(x);
}

// using for loop with array

var arr=[1,5,4,6,8,9]

for (y = 0; y < arr.length; y++){
    console.log(arr[y]);
}

// Using forEach for printing all the elements in the array

arr.forEach( (value,index,self)=>{
    console.log(value,index,self);
})

// MRF

/* 
 MAP-->Perform the specific action for each element in an array  and return the every element inside the new array
 REDUCE
 FILTER
 */


 
//   MAP

var score = [4, 6, 8, 9, 7]
var value = score.map((element) => { 
    return element * 2;
})
console.log(value);


// Filter

// Using for each filter' array

var input = ['🍒', '🍒', '🍒', "✿", '✿', '🟥']
var output = [];

// I want only [🍒,✿]
// Forloop
for (let x = 0; x < input.length; x++){
    if (input[x] === '🍒' || input[x] === '✿') {
        console.log(input[x]);
        output.push(input[x])
    }
}

console.log(output);

// forEach

var input = ['🍒', '🍒', '🍒', "✿", '✿', '🟥']
var output = [];

input.forEach((element ) => {
    if (element !== '🟥') {
       output.push(element)
   }
})
console.log(input,output);

// Using filter

var output = input.filter((element) => {
    return element !== '🟥' || element === '✿';
})
console.log(output);




// Reduce

// calculate for loop   using total score 
var score = [4, 6, 8, 9, 7]
var total = 0;
for (let i = 0; i < score.length; i++){
    total += score[i]
}

 console.log(total);
var score = [4, 6, 8, 9, 7]
var total = 0;

score.forEach((element) => {
     total += element;
})
console.log(total);

// Reduce

var score = [4, 6, 8, 9, 7]


var val = score.reduce((carry, call)=>{

   console.log(carry,call); 
    return carry + call;

})

console.log(val);

// Find  IndexOf
var score = [1, 6, 8, 65, 9]
var res = -1;


// console.log(score.indexOf(9));
// console.log(score.indexOf(7));


function IndexOf(arr = [], val = 0) {
    for (let i = 0; i < arr.length; i++){
        console.log(i);
        if (arr[i] === val) {
            res = i;  
            break;
        }
        
    }

    return res;
    
}
console.log(IndexOf(score,65));