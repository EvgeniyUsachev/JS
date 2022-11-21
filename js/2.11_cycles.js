"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <= 55);

for(let i= 1; i < 8; i++) {
    console.log(i);
    num++;
}

for(let i= 1; i < 10; i++) {
    if(i == 6) {
        break;
      /*   continue; */
    }
    console.log(i);
}



const number = prompt('Введите число', ''); 
    
if(+number % 2 == 0) {
    console.log('четное');
} else {
    console.log('нечетное'); 
}

