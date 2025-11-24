// 13. Given sales [2500, 4000, 1800, 3200, 5000], print using for loop: 
// Day 1: ₹2500 
// Day 2: ₹4000 

[2500, 4000, 1800, 3200, 5000].forEach((element,index) => {
    console.log(`Day ${index+1}: ₹${element}`);
});