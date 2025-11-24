// 11. Create a switch-case program: 
// 1 → “Data Pack”, 2 → “Talktime”, 3 → “Validity Recharge”, anything 
// else → “Invalid Choice”. 

function mobileRecharge(){
    // console.log("Enter option from 1 to 3 [Here Randomly Generated]");
    let option = Math.floor(Math.random()*5)+1;
    console.log(`\nYour Option is ${option}`);
    switch (option){
        case 1:
            console.log("Data Pack...");
            break;
        case 2:
            console.log("TalkTime...");
            break;
        case 3:
            console.log("Validity Recharge...");
            break;
        default:
            console.log("InValid Option");
            
            break;
    }
}

mobileRecharge()
mobileRecharge()
mobileRecharge()
mobileRecharge()
mobileRecharge()

