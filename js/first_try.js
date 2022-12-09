

function barTriang(p1, p2, p3){
  let pointArr =[];
  let x = ((p1[0] + p2[0] + p3[0]) / 3);
  let y = ((p1[1] + p2[1] + p3[1]) / 3);

  pointArr.unshift(x);
  pointArr.push(y);

  return pointArr;
}
console.log(barTriang([4, 6], [12, 4], [10, 10]))

function SubtractSum(n){

for(let i = 0; i < n; i++) {
  let nNum = n.toString();
  let nArr = nNum.split('');
  let numberArr = nArr.map(Number)
  let sum = numberArr.reduce(function (a, b) {
    return a + b;
  }, 0);
 n = n - sum
}
}



console.log(SubtractSum(222))
console.log(typeof SubtractSum(222))

function SubtractSum(n){
  let nNum = n.toString();
  let nArr = nNum.split('');
  let numberArr = nArr.map(Number)
  let sum = numberArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  n = sum;
  return n;
}
console.log(SubtractSum(222))

