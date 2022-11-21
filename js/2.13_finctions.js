'use strict';


let num = 20;

function showFirstMessage (text) {
    console.log(text);
    num = 10;
}
showFirstMessage('hello');
console.log(num);

function calc (a, b) {
    return (a + b);
}

console.log(calc(4, 5)); 

function ret () {
    let num = 50;
    num=50*2;
    return num;
}

const another = ret();
console.log(another);


/* FUNCTION EXPRESSION */
const logger = function(){
    console.log('hi');
};
logger();

/* СТРЕЛОЧНАЯ */

const calculator = (c, d) => { return c + d };
console.log(calculator(1, 3));