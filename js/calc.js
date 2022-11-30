
  

 /*  import _ from 'lodash';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[_.random(operators.length - 1)];

const calculate = (firstOperand, operator, secondOperand) => {
  let answer;

  switch (operator) {
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default: throw new Error(`error while parsing expression ${firstOperand} ${operator} ${secondOperand}`);
  }

  return answer;
};

const instructionText = 'What is the result of the expression?';

const getQnA = () => {
  const firstOperand = _.random(1, 1000);
  const operator = getRandomOperator();
  const secondOperand = _.random(1, 1000);

  const question = [firstOperand, operator, secondOperand].join(' ');
  const answer = calculate(firstOperand, operator, secondOperand).toString();

  return [question, answer];
};

export default () => {
  playGame(instructionText, getQnA);
}; */

function multiply(a, b){
    if (undefined == a || undefined == b
      || isNaN(a) || isNaN(b))
      throw new Error('Both arguments should be numbers')
    return a * b
  }

const romeLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

const arabLetters = [1, 5, 10, 50, 100, 500, 1000]
/* for (let arabLetter of arabLetters)
console.log(arabLetter) */

const myMassive = [1, 5, 10, 502, 1001, 5040, 1000]
myMassive.push(20)
console.log(myMassive)


romeLetters.forEach(function(item, i, romeLetters) {
    item = value;
})
console.log(romeLetters)





//////////////////////////////////////////////////////////////////////////////


function calculator(string) {

    const stringArray = string.split(' ');

    let firstOperand = stringArray[0]; 
    let operator = stringArray[1]; 
    let secondOperand = stringArray[2]; 
    let answer

    isNaN(firstOperand) ? console.log('не является числом') : console.log('число')

   /*  if (isNaN(firstOperand)) {
        console.log('privet');
    } */
    

console.log(firstOperand);
console.log(operator);
console.log(typeof operator);

console.log(secondOperand);
console.log(stringArray);

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
    default: throw new Error(`Неверный оператор`);

}
        return String(Math.floor(answer));

}
   
console.log(calculator('I + I'));


















const stringInt = '40'
console.log(parseInt(stringInt));

let string = '60';
parseInt(string);

parseInt("015", 10);

parseInt("Hello", 8); // Не является числом


console.log(parseInt('10px'));



function calculator(string) {

    const stringArray = string.split(' ');

    let firstOperand = stringArray[0];
    let operator = stringArray[1];
    let secondOperand = stringArray[2];

console.log(firstOperand);
console.log(operator);
console.log(secondOperand);
console.log(stringArray);

function chooseOperator () {
    let answer = +firstOperand +[operator] +secondOperand;
    console.log(answer)
    /* return String(Math.floor(answer)); */
}

chooseOperator ();

/* if(operator === '+') {
    let answer = +firstOperand + +secondOperand;
    return String(answer);
    }  
if (operator === '-'){
        let answer = +firstOperand - +secondOperand;
        return String(answer);
    }  
if (operator === '*'){
        let answer = +firstOperand * +secondOperand;
        return String(answer);
    }  
if (operator === '/') {
        let answer = +firstOperand / +secondOperand;
        return String(Math.floor(answer));
    } */

}
   
console.log(calculator('3 + 6'));

console.log(2+3)


римские if Nan