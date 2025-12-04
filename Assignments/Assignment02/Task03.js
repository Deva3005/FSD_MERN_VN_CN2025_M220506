// 3. Create a variable name and: 
// o Print "Hello, [name]! Welcome to JavaScript." 
// o Convert the name to uppercase 
// o Check if the message has more than 10 characters 
// o Check if it contains the word "JavaScript" 

let userName = "Deva";

console.log(`The Name Provided is ${userName}`);

console.log(`The Name is Converted to UpperCase : ${userName.toLocaleUpperCase()}`);

console.log("Name Updated here");

console.log(`Check the word '${userName=userName+" Javascript"}' length is greater than 10 character : ${(userName.length>10)?"True":"False"}`)

console.log("Checking the updated word got Javascript...",userName.includes("Javascript"));
