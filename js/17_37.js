function calculator(string) {

    const stringArray = string.split(' ');
        if (stringArray.length > 3) {
          throw new Error(`Exceeded number of operands`)
        }
        console.log(...stringArray);
        let firstOperand = stringArray[0];
        if (firstOperand > 10 || firstOperand == 0) {
          throw new Error(`Operand must vary from 1 to 10`)
        }
        let operator = stringArray[1];
    
        let secondOperand = stringArray[2];
        if (secondOperand > 10 || secondOperand == 0) {
          throw new Error(`Operand must vary from 1 to 10`)
        }
    
        console.log(stringArray);
    
    
    
        if ((isNaN(firstOperand)) && (!isNaN(secondOperand)) || (!isNaN(firstOperand)) && (isNaN(secondOperand))) {
            throw new Error(`Different operands`)
          }
    
    let answer;
    
    const romeLetters = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', ''],
                        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXX', 'XC',] ,
                        ['C']
                        ];
    
    const arabLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 50, 90, 100, 0];
    
    console.log(firstOperand)
    console.log(secondOperand)
    
    isNaN(firstOperand) || isNaN(secondOperand) ? fromRomeToArab() : calculate()

     for(let value of romeLetters[0]) {
        if(firstOperand == )
     }
    
    function fromRomeToArab() { // из римских в русские
        for (let i = 0; i < 12; i++ ) {
            if (firstOperand == (romeLetters[0][i])) {
                firstOperand = arabLetters[i];
            } else if (firstOperand != (romeLetters[0][i])) {
                throw new Error(`Operand must vary from 1 to 10`);
            }
            break;
        };
        for (let i = 0; i < 12; i++ ) {
            if (secondOperand == (romeLetters[0][i])) {
                secondOperand = arabLetters[i];
            } else if (firstOperand != (romeLetters[0][i])) {
                throw new Error(`Operand must vary from 1 to 10`);
            }
            break;
        };
            return +firstOperand, +secondOperand
    }
    
    console.log(firstOperand)
    console.log(secondOperand)
    
    
    
    
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
          answer =Math.floor(+firstOperand / +secondOperand);
          break;
        default: throw new Error(`Wrong operator`);
      }
      return String(Math.floor(answer))
    }
    
    
    console.log(typeof answer) 
    console.log(answer)
    
    let strAnswer = answer.toString()
     

    
    if (isNaN(stringArray[0])) {
        strAnswer = fromArabToRome(strAnswer)
        if (firstOperand > 10 || firstOperand == 0) {
            throw new Error(`Operand must vary from 1 to 10`)
          }
    }
    
    
    
    function fromArabToRome(strAnswer) { // из русских в римские
        if((strAnswer == 0)){
            strAnswer = '';
            return strAnswer;
        }
        if(strAnswer.length == 1) {
            strAnswer = romeLetters[0][strAnswer - 1];
            return strAnswer;
        } else if (strAnswer.length == 2) {
            let numSeparate = strAnswer.split(''); 
            if(numSeparate[1] == 0) {
                numSeparate[1] = '';
            }
            strAnswer = romeLetters[1][numSeparate[0] - 1] + romeLetters[0].slice([numSeparate[1] - 1])[0];
            return strAnswer;
            } else if (strAnswer.length == 3) {
                strAnswer = romeLetters[2][0];
            return strAnswer;
            } 
            return strAnswer;
            }
    
            return strAnswer
        }
        
       /*  console.log(calculator('5 / 4'))
        console.log(calculator('X + VIII')) */
    
    console.log(calculator('X / IV'))
        