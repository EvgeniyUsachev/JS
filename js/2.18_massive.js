'use strict';

const arr = [7, 15, 28, 16, 25];
arr.sort(compareNumber);
console.log(arr);

function compareNumber (a, b) {
    return a - b;
}

/* arr.pop(); */ // delete last item from array
/* arr.push(10); // add 10 to array
console.log(arr); */

//перебрать элементы массива
const arr = [7, 15, 28, 16, 25];
for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i])
}

/* for (let value of arr) {
    console.log(value);
} */
const arr = [7, 15, 28, 16, 25];
arr.forEach(function(item, i, arr)  {
    console.log(`значение ${i}го элемента в массиве ${arr} : ${item}`);
});

/* let list = prompt('', '');
const testArr = list.split(', ');
console.log(testArr); */

let list = prompt('', '');
const testArr = list.split(', ');
testArr.sort();
const joinTest =testArr.join('; ')
console.log(joinTest);


// перебрать массив
/* const myMassive = [1, 5, 10, 502, 1001, 5040, 1000]
for(let value of myMassive)
console.log(value) */

/* map */

const myMassive = [1, 5, 10, 502, 1001, 5040, 1000]
const multiply = myMassive.map(num => num *2)
console.log(multiply)

/* filter */

const filteredMassive = myMassive.filter(num => num>20)
console.log(filteredMassive)

let obj = {
    s: 'I',
    V : 5

}
console.log(Object.values(obj.V))

console.log(obj.V)


const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

  function multipl(a, b){
    return (a * b);
  }
  console.log(multipl(1, 3))