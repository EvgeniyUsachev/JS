//СОЗДАЕМ ПОВЕРХОСТНУЮ КОПИЮ ОБЪЕКТА

function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj)  {
        objCopy[key] = mainObj [key]
    }

        return objCopy 

}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4, 
    } 
}


const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers)
console.log(numbers)


newNumbers.c.x = 10;
console.log(newNumbers)
console.log(numbers)

const add = {
    d: 17,
    e: 20
}

console.log(Object.assign(numbers, add))

const clone = Object.assign({}, add)

console.log(clone)
clone.d = 21
console.log(add)
console.log(clone)

///MASSIVE COPY

const oldArr = [1, 2, 3]
const newArr = oldArr.slice()

console.log(oldArr)
console.log(newArr)

newArr[1] = 'adasdasd'
console.log(newArr)
console.log(oldArr)


//// ОПЕРАТОР SPREAD ...

const carsArr = ['ford', 'mits', 'reno', 'lada']
const driverArr = ['a', 'b', 'c']
const mixArr = [...carsArr, ...driverArr]

console.log(mixArr)

/// чтобы сделать копию массива 

const copyOfCars = [...carsArr]
console.log(copyOfCars) 

/// использование SPREAD

function spreadUse (a, b, c) {/// a b c могут быть какими то данными 
    console.log(a),
    console.log(b),
    console.log(c)
} 

const dataArr = [2, 5, 7]

spreadUse(...dataArr) // В ФУНКЦИЮ ПРИХОДИТ ОТДЕЛЬНО А Б С