var nama = 'haji';
nama = 'hello world';


function x() {
    let nama = ''
}

function y() {
    const nama = ''
}

let snak = 'biryani';

snak = 'chips';
console.log(snak);

// const food = 'Idlie';
// console.log(food);

// food = 'dosa';

// REST operator

function add(a, b, ...c) {

    console.log(c);
     
    let sum = a + b;

    for (let x = 0; x < c.length; x++) {
        sum += c[x]
    }
    return sum;

}
console.log(add(10,20,30,40,50,));

// DEStructuring

var [name, age, qual, place] = ['hajeera', '28', 'B.sc', 'chennai'];

console.log(name, age, qual, place);

// Object Property short hand

var hero = 'Ironman';
var value = [28, 20, 40, 70];
var place = 'chennai'


var data = {
    hero,
    value,
    place,
}

console.log(data);


// template literals

var name = 'hajeera'
var bonusMoney = '10,0000'
const Moneytemplate = `Hey ${name}, the ${bonusMoney}, is creadited to your account by the rummy circle`
console.log(Moneytemplate);

console.log("Hey" + name + ,'the' + bonusMoney+ ' is creadited to your account by the rummy circle')




