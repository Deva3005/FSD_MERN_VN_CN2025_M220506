// 4. Create a fruits array with 5 items. Perform: push(), pop(), shift(), and 
// unshift() and print the final array. 

fruits = ["Apple","Orange","Banana","Strawberry","Watermelon","PineApple"]
console.log(fruits);

// Pop Remove and Return Element
let removedLastFruit=fruits.pop()
console.log(removedLastFruit);
console.log(fruits);

// Push Add Element 
fruits.push("Dragon")
console.log(fruits);

// Shift Remove and Return Element
let removedFirstFruit=fruits.shift()
console.log(removedFirstFruit);
console.log(fruits);

// UnShift : Add Element in the First Position
fruits.unshift("Gum Gum Fruit")
console.log("Added New Fruit in the 1st pos");
console.log(fruits);
