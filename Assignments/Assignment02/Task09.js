// 9. Two delivery persons earn ₹300 and ₹500. 
// Use a ternary operator to print who earns more and by how much. 

function checkWhoEarnsMore(earning1,earning2) {
    return (earning1>earning2)?`Person 1 Earns more ${earning1}`:`Person 2 Earns more ₹${earning2}`
}

console.log(checkWhoEarnsMore(300,500));
console.log(checkWhoEarnsMore(500,300));
