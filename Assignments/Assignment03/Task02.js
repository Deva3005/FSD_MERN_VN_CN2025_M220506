// 2. Write a program that takes marks (0–100) and prints the grade
// (A/B/C/F). Also take an age input and use a ternary operator to print
// “Adult” or “Minor”.

function ShowGrades(x1 = null) {
//   let x = (x1 == null) ? Math.floor(Math.random() * 100) + 1 : x1;
  let x = x1 ?? Math.floor(Math.random() * 100) + 1;
  switch (true) {
    case x >= 90:
      console.log(x, "Grade is S");
      break;
    case x >= 80:
      console.log(x, "Grade is A");
      break;
    case x >= 70:
      console.log(x, "Grade is B");
      break;
    case x >= 50:
      console.log(x, "Grade is C");
      break;
    case x >= 40:
      console.log(x, "Grade is D");
      break;
    case x >= 30:
      console.log(x, "Grade is E");
      break;
    default:
      console.log(x, "Grade is F");
      break;
  }
}

ShowGrades()
ShowGrades(78)

function showAgeCheck(age=null) {
    age = age ?? Math.floor(Math.random()*100)+1
    return (age>=18)?`Adult Age ${age}` : `Not an Age ${age}`
}

console.log(showAgeCheck());
console.log(showAgeCheck(27));
console.log(showAgeCheck(17));

