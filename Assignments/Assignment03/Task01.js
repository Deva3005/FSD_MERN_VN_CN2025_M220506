// 1. Write a program that takes a number and prints whether it is even/odd, 
// positive/negative/zero, and whether it is divisible by both 3 and 5. 

function EvenOrOdd(number) {
    if (number%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}

function numberSign(number) {
    if(number<0){
        return "Negative Number";
    }else if(number > 0){
        return "Positive Number";
    }else{
        return "Zero Its Zero";
    }
}

function divisibleBy3and5(number) {
    if (number%3==0 && number%5==0){
        return true;
    }else{
        return false;
    }
}
console.log("Signed Number",numberSign(-1));
console.log("Signed Number",numberSign(0));
console.log("Signed Number",numberSign(1));

for (let index = 1; index <= 50; index++) {
    console.log("Even or Odd",index,EvenOrOdd(index));
    console.log("divisibleBy 3 and 5",index,divisibleBy3and5(index));      
}