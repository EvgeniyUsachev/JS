'use strict';

console.log('arr' + ' - object');
console.log(4 + ' - object');

console.log(4 + '5');
console.log(4 + +'5');

let incr = 10,
    decr = 10;
    
/* incr++; 
decr--;     

++incr; 
++decr;     
 */
console.log(incr--);
console.log(decr++);


console.log(5 > 3); 
console.log(2*5 == '10'); 
console.log(2*5 === 10); 

const isChecked = false,
      isClosed = false; 

console.log(isChecked || !isClosed);
/* console.log(isChecked && isClosed); оператор И - дает тру если ОБА или больше элемента являются ТРУ */

console.log(isChecked || !isClosed);