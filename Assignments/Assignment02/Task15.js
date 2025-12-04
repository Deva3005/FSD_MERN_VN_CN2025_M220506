// 15. Given monthly expenses [2000, 1500, 3500, 4000], write a function to 
// calculate and print the total money spent. 

// Reduce
let totalSpent = [2000, 1500, 3500, 4000].reduceRight((pValue,currValue)=>{
    console.log("Adding ",currValue);
    return pValue+currValue;
},0);

console.log("Total",totalSpent);
