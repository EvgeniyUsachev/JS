function calculator(string) {

    const stringArray = string.split(' ');

    let firstOperand = stringArray[0]; 
    let operator = stringArray[1]; 
    let secondOperand = stringArray[2]; 
    let answer

    let latinDigits = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        IX: 9,
        X: 10,
        XV: 15,
        XIX: 19,
        XX: 20,
        XXV: 25,
        XL: 40,
        C: 100,
        '': -4,
     /*    '': 0, 
        '': -1 */
    };


console.log(firstOperand);
console.log(operator);
console.log(secondOperand);
console.log(stringArray);


    isNaN(firstOperand) || isNaN(secondOperand) ? transformToLatin() : calculate()

 

    function transformToLatin () {
        for(let key in latinDigits) {
            if(firstOperand == key) {
                firstOperand = latinDigits[key]
            }
            if(secondOperand == key) {
                secondOperand = latinDigits[key]
            }
            if((firstOperand - secondOperand) <= 0) {
                answer = ''
            }
          
        }
        return {firstOperand, secondOperand, answer}
        }

        calculate()

console.log(firstOperand);
console.log(secondOperand);


function calculate() {
    switch (operator) {
        case '+':
            answer =+firstOperand + +secondOperand;
            break;
        case '-':
            answer = +firstOperand - +secondOperand;
            break;
        case '*':
            answer = +firstOperand * +secondOperand;
            break;
        case '/':
            answer = +firstOperand / +secondOperand;
            break;
        default: throw new Error(`Неверный оператор`);
    
    }
    return String(answer)
}

function transformToArab () {
    
    for(let key in latinDigits) {
        if(answer == latinDigits[key]) {
            answer = key
            return String(answer)
        }
      
    }
    }

   if (isNaN(stringArray[0])) {
     transformToArab () 
     return String(Math.floor(answer))
   }
    

}

    
    

    
console.log(calculator('II - I'));
console.log(calculator('I - V'));


/* console.log(typeof(calculator('I - V'))); */



function calculator(string) {

    const stringArray = string.split(' ');

    let firstOperand = stringArray[0]; 
    let operator = stringArray[1]; 
    let secondOperand = stringArray[2]; 
    let answer

    let latinDigits = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        IX: 9,
        X: 10,
        XV: 15,
        XIX: 19,
        XX: 20,
        XXV: 25,
        XL: 40,
        C: 100,

    };


console.log(firstOperand);
console.log(operator);
console.log(secondOperand);
console.log(stringArray);


    isNaN(firstOperand) || isNaN(secondOperand) ? transformToLatin() : calculate()

    function transformToLatin () {
        for(let key in latinDigits) {
            if(firstOperand == key) {
                firstOperand = latinDigits[key]
            }
            if(secondOperand == key) {
                secondOperand = latinDigits[key]
            }
        }
        return firstOperand, secondOperand
        }

        calculate()

console.log(firstOperand);
console.log(secondOperand);


function calculate() {
    switch (operator) {
        case '+':
            answer =+firstOperand + +secondOperand;
            break;
        case '-':
            answer = +firstOperand - +secondOperand;
            break;
        case '*':
            answer = +firstOperand * +secondOperand;
            break;
        case '/':
            answer = +firstOperand / +secondOperand;
            break;
        default: throw new Error(`Неверный оператор`);
    
    }
    return String(answer)
}

if (isNaN(stringArray[0])) {
    
        for(let key in latinDigits) {
            if(answer == latinDigits[key]) {
                answer = key
            }
          
        }
        return String(answer)
        }
        return String(Math.floor(answer))
    
}
        
console.log(calculator('V - I'));




//////////////LAST



function calculator(string) {

    const stringArray = string.split(' ');
    if (string.length > 8) {
      throw new Error(`Exceeded number of operands`)
    }
  
    let firstOperand = stringArray[0];
    if (firstOperand > 10 || firstOperand == 0) {
      throw new Error(`Operand must vary from 1 to 10`)
    }
    let operator = stringArray[1];
    let secondOperand = stringArray[2];
    if (secondOperand > 10 || secondOperand == 0) {
      throw new Error(`Operand must vary from 1 to 10`)
    }
    let answer

    console.log(stringArray[0].length);
    console.log(typeof(stringArray[0]))

  
    if ((isNaN(firstOperand)) && (!isNaN(secondOperand)) || (!isNaN(firstOperand)) && (isNaN(secondOperand))) {
      throw new Error(`Different operands`)
    }
  
    let latinDigits = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XV: 15, XIX: 19, XX: 20, XXV: 25, XL: 40, C: 100 }
  
    isNaN(firstOperand) || isNaN(secondOperand) ? transformToLatin() : calculate()
  
    function transformToLatin() {
      for (let key in latinDigits) {
        if (firstOperand == key) {
          firstOperand = latinDigits[key]
          if (firstOperand > 10 || firstOperand == 0) {
            throw new Error(`Operand must vary from 1 to 10`)
          }
        }
        if (secondOperand == key) {
          secondOperand = latinDigits[key]
          if (secondOperand > 10 || secondOperand == 0) {
            throw new Error(`Operand must vary from 1 to 10`)
          }
        }
      }
      return +firstOperand, +secondOperand
    }
  
    calculate()
  
    function calculate() {
      switch (operator) {
        case '+':
          answer = +firstOperand + +secondOperand;
          break;
        case '-':
          answer = +firstOperand - +secondOperand;
          break;
        case '*':
          answer = +firstOperand * +secondOperand;
          break;
        case '/':
          Math.floor(answer = +firstOperand / +secondOperand);
          break;
        default: throw new Error(`Wrong operator`);
      }
      return (Math.floor(answer))
    }
  
    if (isNaN(stringArray[0])) {
      answer = (Math.floor(answer))
      if (answer <= 0) {
        answer = ''
      }
      for (let key in latinDigits) {
        if (answer == latinDigits[key]) {
          answer = key
        }
      }
      return (answer)
    }
  
    return String(Math.floor(answer))
  }


  console.log(calculator('VII - I'));














/// that workred 

function calculator(string) {
    // код пишите внутри этой функцииd
    const stringArray = string.split(' ');
  
      let firstOperand = stringArray[0];
      let operator = stringArray[1];
      let secondOperand = stringArray[2];
  if(operator === '+') {
      let answer = +firstOperand + +secondOperand;
      return String(answer);
      } else if (operator === '-'){
          let answer = +firstOperand - +secondOperand;
          return String(answer);
      } else if (operator === '*'){
          let answer = +firstOperand * +secondOperand;
          return String(answer);
      } else if (operator === '/') {
          let answer = +firstOperand / +secondOperand;
          return String(Math.floor(answer));
      }
  
  }

/////////////////////////////////////////////////////////////////////

  function calculator(string) {

    const stringArray = string.split(' ');

    let firstOperand = stringArray[0]; 
    let operator = stringArray[1]; 
    let secondOperand = stringArray[2]; 
    let answer

    isNaN(firstOperand) || isNaN(secondOperand) ? calculateLatin() : calculateArab()



function calculateArab() {
    switch (operator) {
        case '+':
            answer = firstOperand + secondOperand;
            break;
        case '-':
            answer = +firstOperand - +secondOperand;
            break;
        case '*':
            answer = +firstOperand * +secondOperand;
            break;
        case '/':
            answer = +firstOperand / +secondOperand;
            break;
        default: throw new Error(`Неверный оператор`);
    
    }
            return String((answer));
}




}
   
console.log(calculator('I + I'));




const min = function (list){
    function compareNumber (a, b) {
        return a - b;
       }
       
       list.sort(compareNumber);
    return list[0];
}

var max = function(list){
    function compareNumber (a, b) {
        return a - b;
       }
       
       list.sort(compareNumber);
    return list.slice(-1)[0] ;
}

function invert(array) {
    const changeSign = array.map(num => num *-1)
   return changeSign
    }
 
    
    console.log(invert([1,2,3,4,5])
    
   
 

 array.forEach(function(item) {
    item *-1


        function findMultiples(integer, limit) {
            let arr =[];
            for (let i = integer; i <= limit; i+=integer) {
                arr.push(i)
            }
            return arr
            }
            
            console.log(findMultiples(2, 10))



        function findMultiples(int,limit){
            let result = []
            
            for (let i = int; i<=limit ; i+=int)
              result.push(i)
              
            return result
          }
          console.log(findMultiples(2, 10))




function calculator(string) {

  const stringArray = string.split(' ');
  if (string.length > 8) {
    throw new Error(`Exceeded number of operands`)
  }

  let firstOperand = stringArray[0];
  if (firstOperand > 10 || firstOperand == 0) {
    throw new Error(`Operand must vary from 1 to 10`)
  }
  let operator = stringArray[1];
  let secondOperand = stringArray[2];
  if (secondOperand > 10 || secondOperand == 0) {
    throw new Error(`Operand must vary from 1 to 10`)
  }
  let answer

  if ((isNaN(firstOperand)) && (!isNaN(secondOperand)) || (!isNaN(firstOperand)) && (isNaN(secondOperand))) {
    throw new Error(`Different operands`)
  }

  let latinDigits = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XV: 15, XIX: 19, XX: 20, XXV: 25, XL: 40, C: 100 }

  isNaN(firstOperand) || isNaN(secondOperand) ? transformToLatin() : calculate()

  function transformToLatin() {
    for (let key in latinDigits) {
      if (firstOperand == key) {
        firstOperand = latinDigits[key]
        if (firstOperand > 10 || firstOperand == 0) {
          throw new Error(`Operand must vary from 1 to 10`)
        }
      }
      if (secondOperand == key) {
        secondOperand = latinDigits[key]
        if (secondOperand > 10 || secondOperand == 0) {
          throw new Error(`Operand must vary from 1 to 10`)
        }
      }
    }
    return +firstOperand, +secondOperand
  }

  calculate()

  function calculate() {
    switch (operator) {
      case '+':
        answer = +firstOperand + +secondOperand;
        break;
      case '-':
        answer = +firstOperand - +secondOperand;
        break;
      case '*':
        answer = +firstOperand * +secondOperand;
        break;
      case '/':
        answer = +firstOperand / +secondOperand;
        break;
      default: throw new Error(`Wrong operator`);
    }
  }

  if (isNaN(stringArray[0])) {
    answer = (Math.floor(answer))
    if (answer <= 0) {
      answer = ''
    }
    for (let key in latinDigits) {
      if (answer == latinDigits[key]) {
        answer = key
      }
    }
    return (answer)
  }

  return String(Math.floor(answer))
}