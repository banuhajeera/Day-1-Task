// Day 3 Task -Function

// Do the below programs in anonymous function & IIFE

// Print odd numbers in an array

// Anonymous Function
 
let value = function(arr) {
    let temp=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
           temp.push(arr[i]) 
        }
      
    }
    return temp
}
var result = value([1, 8, 9, 6, 7])
console.log(result);

// IIFE

(function (arr) {
    var temp=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            temp.push(arr[i])
        }
       
    }
  console.log(temp)
   
})([1, 8, 9, 6, 7])


// Arrow function

var fn = (arr) => {
    let temp=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
           temp.push(arr[i]) 
        }
      
    }
    return temp
}
var result = fn([1, 8, 9, 6, 7])
console.log(result);

// ------------------------------------------------------------------------------------
// Convert all the strings to title caps in a string array

// Annonymous function

var titlecap = function(letter) {
    
    text = letter.toLowerCase().split(' ')
    for (let i = 0; i < text.length; i++){
        text[i]=text[i].charAt(0).toUpperCase()+text[i].slice(1)
        
    }
    return text
  
}

var values = titlecap("the strings to title caps in a string array")
console.log(values);

// IIFE function 
(function (letter) {
    text = letter.toLowerCase().split(' ')
    for (let i = 0; i < text.length; i++){
       text[i]=text[i].charAt(0).toUpperCase()+text[i].slice(1) 
    
    }
    console.log(text)
   
}
    
)("the strings to title caps in a string array")


// Arrow function

var caps = (letter) => {
    text = letter.toLowerCase().split(' ')
    for (let i = 0; i < text.length; i++){
        text[i]=text[i].charAt(0).toUpperCase()+text[i].slice(1)
    }
    return text
    
}

console.log(caps("the strings to title caps in a string array"))
// ----------------------------------------------------------------------------------------------------

// Sum of all numbers in an array

// Annonymous function

var Asum = function(arr) {
    
    var sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    return sum
    
}

console.log(Asum([1, 5, 8, 7, 8]))

// IIFE

// (function(arr)
// {
//     let sum=0;
//     for(var i=0;i<arr.length;i++)
//     {
//         sum=sum+arr[i];
//     }
//     console.log( sum );
// })
// ([10,20,30,40]);


// Arrow

function arsum(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {

        sum += arr[i]
    }

    return sum
}
console.log(arsum([1, 5, 8, 7, 8])) 


// -----------------------------------------------------------------------------------------

// find prime number in an array

// Anonymous Function:
                 
let prime = function(arr)
{
    let isprime=[];
for (let i=0;i<arr.length;i++)
{
    let count =0;
  for (let j=1 ; j<=arr[i] ;j++)
    {
      if(arr[i]%j===0){
          count++;
    }   
}
        if(count<=2)
    {
    isprime.push(arr[i]);
    }
      
}
    return isprime
}
 
console.log(prime([1,2,3,4,5,6,7,8,9,10]))


// IIFE

let primenumber = (function(arr)
{
    let isprime=[];
for (let i=0;i<arr.length;i++)
{
    let count =0;
  for (let j=1; j<=arr[i]; j++)
  {
      if(arr[i]%j===0)
      {
          count++;
    }   
}
        if(count<=2)
        {
    isprime.push(arr[i]);
    }
      
}
    console.log(isprime)
})([1,2,3,4,5,6,7,8,9,10])

// arrow function
    
let primes = (arr) => {
    let isprime = [];
    for (let i = 0; i < arr.length; i++){
        let count = 0
        for (let j = 1; j <= arr[i]; j++){
            if (arr[i] % 2 === 0) {
                count++
            }
        }
        if (count <= 2) {
            isprime.push(arr[i])
        }

    }
    return isprime
}
 
console.log(primes([1,2,3,4,5,6,7,8,9,10]))
// ---------------------------------------------------------------------------
//  Return all the palindromes in an array

// Anonymous Function :  

let palindrome=[];
let arr=["madam","bob","pop","1221"];


let getPalindrome = function (arr) {
    
    for (i = 0; i < arr.length; i++){
        let newarr = arr[i].split('').reverse().join('')
        if (arr[i] === newarr) {
            palindrome.push(arr[i])
        }
    }
    return palindrome
}
console.log(getPalindrome(arr))



// IIFE


let palin = []
let arr1 = ["madam", "bob", "pop", "1221"];

(function (arr1) {
    for (i = 0; i < arr1.length; i++){
        let newarr = arr1[i].split('').reverse().join('')
        if (arr1[i] === newarr) {
            palin.push(arr1[i])
        }
    }
    console.log(palin);
})(arr1)

// Arrow Function :  

let palle=[];
let arr2=["madam","man","pop","1221"];


let polin= (arr2)=>{
for (let i=0; i<arr2.length;i++)
{    let newarr=arr2[i].split("").reverse().join("");
    if (arr2[i]===newarr)
    {
        palle.push(arr2[i]);
    }
}
return palle
}
console.log(polin(arr2));







