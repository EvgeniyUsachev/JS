function generateRange(min, max, step){
    let myArr = [];
    for(let i = min; i < max; i = i + step ) {

        myArr.push(i)
    }
return myArr


}
generateRange(2, 10, 2)
console.log(myArr)



generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]