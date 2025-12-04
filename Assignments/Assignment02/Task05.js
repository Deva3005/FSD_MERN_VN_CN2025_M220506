// 5. Create an array of 5 numbers and print: 
// o The sum 
// o The largest number 

let numberArray = [Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]
// numberArray = [1,2,3,4,5]
console.log(numberArray);

// SUM
console.log(numberArray.reduce((initial,current)=>{return initial+current},0));

// Max
console.log(Math.max(...numberArray));

