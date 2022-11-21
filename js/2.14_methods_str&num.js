'use strict';

/* const str = 'test';
console.log(str.length);

const arr = [1, 2, 3];
console.log(arr.length);
 */

const str = 'teSt';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit ='some fruit';
console.log(fruit.indexOf(('fr'))); 
/* показывает по счету букву в строке */

const elem = 'Hello my dear';
console.log(elem.slice(9, 13)); /* вырезать с 9 по 13 */

console.log(elem.substring(9, 13)); /* вырезать с 9 по 13 */

console.log(elem.substr(9, 4)); /* вырезать с 9 четыре след. знака */

/* ЧИСЛА */

const num = 12.500000001
console.log(Math.round(num));str

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));