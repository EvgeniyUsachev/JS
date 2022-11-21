'use strict';

if (4==9) {
    console.log('ok');
} else {
    console.log('error');
}
/* Вложность условий */

/* const num = 50; 

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('oki');
}

(num ==50) ? console.log('oki') : console.log('error'); */

const num = 50; 
switch (num) {
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 50:
        console.log('oki');
        break;
    default: 
        console.log('not today');
        break;
}