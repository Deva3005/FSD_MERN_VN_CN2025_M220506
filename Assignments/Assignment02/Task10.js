// 10. Write a program that prints whether a given bus number goes to Route A 
// (even) or Route B (odd). 

function whereToGo(number) {
    return number%2==0?`number is ${number} "Route A"`:`number is ${number} "Route B"`;
}

console.log(whereToGo(14));
console.log(whereToGo(15));
console.log(whereToGo(16));
console.log(whereToGo(17));
