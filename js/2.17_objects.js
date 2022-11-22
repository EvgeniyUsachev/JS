'use strict';

const options = {
    name:'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() { //это метод(функция внутри объекта)
        console.log('test');
    }
};

options.makeTest();

// ДЕСТРУКТУРИЗАЦИЯ 

let {border:b, background:bg} = options.colors;
console.log(bg);

//


console.log(Object.keys(options).length);

console.log(options['colors']['border']); // залезаю внутрь color чтоы посомтреть значение border. 
console.log(options.colors.border); // тоже самое что выше но в точку


let a=0

for (let key in options) {
    console.log(key);
    ++a;
    console.log(a);
}

/* console.log(options.name);

delete options.name;

console.log(options);
 */
// перебор объекта 

// перебираем значение ключей в объекте options 

for (let key in options) {
    if (typeof(options[key]) == "object") {
        for (let i in options[key]) {
            console.log(`Свеойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свеойство ${key} имеет значение ${options[key]}`);
    }
}