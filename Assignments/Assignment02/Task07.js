// 7. Write a loop that prints levels from Level 1 to Level 10, then prints 
// “Game Ready!”.

let flag = false;
for (let index = 1; index <=10; index++) {
    console.log(`Level ${index}`);
    if (index==10){
        flag=true
    }
}
if (flag){
    console.log("Game Ready!");
} 
