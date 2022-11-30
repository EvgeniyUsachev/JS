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