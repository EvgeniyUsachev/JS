function calculator(string) {

    const stringArray = string.split(' ');
    if (stringArray.length > 3) {
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
  
    if ((isNaN(firstOperand)) && (!isNaN(secondOperand)) ||
      (!isNaN(firstOperand)) && (isNaN(secondOperand))) {
      throw new Error(`Different operands`)
    }
  
    let answer;
  
    const romeLetters = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', ''],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXX', 'XC',],
    ['C']
    ];
  
    const arabLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  
    if (isNaN(stringArray[0])) {
      if (!romeLetters[0].includes(firstOperand)) {
        throw new Error(`Operand must vary from 1 to 10`)
      }
      if (!romeLetters[0].includes(secondOperand)) {
        throw new Error(`Operand must vary from 1 to 10`)
      }
    }
  
    isNaN(firstOperand) || isNaN(secondOperand) ? fromRomeToArab() : calculate()
  
    function fromRomeToArab() {
      romeLetters[0].forEach((item, i) => {
        if (firstOperand == item) {
          firstOperand = arabLetters[i]
        } 
      });
      romeLetters[0].forEach((item, i) => {
        if (secondOperand == item) {
          secondOperand = arabLetters[i]
        }
      });
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
          answer = Math.floor(+firstOperand / +secondOperand);
          break;
        default: throw new Error(`Wrong operator`);
      }
      return String(Math.floor(answer))
    }
  
    let strAnswer = answer.toString()
  
    if (isNaN(stringArray[0])) {
      strAnswer = fromArabToRome(strAnswer)
    }
  
    function fromArabToRome(strAnswer) {
      if ((strAnswer <= 0)) {
        strAnswer = '';
        return strAnswer;
      }
      if (strAnswer.length == 1) {
        strAnswer = romeLetters[0][strAnswer - 1];
        return strAnswer;
      }
      else if (strAnswer.length == 2) {
        let numSeparate = strAnswer.split('');
       
        strAnswer = romeLetters[1][numSeparate[0] - 1] + romeLetters[0].slice([numSeparate[1] - 1])[0];
        return strAnswer;
      }
      else if (strAnswer.length == 3) {
        strAnswer = romeLetters[2][0];
        return strAnswer;
      }
    }
    return strAnswer
  }

  console.log(calculator('X * X'))
  console.log(calculator('-1 * -2'))
  console.log(calculator('-1 / -3'))
  console.log(calculator('9 / -3'))
  console.log(calculator('VIII * VI'))
