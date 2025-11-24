// 16.  Create three functions placeOrder(callback), cookFood(callback), and 
// deliverFood() using setTimeout to simulate delays. Use callbacks so the 
// messages print in order: Order placed → Food cooking → Food 
// delivered. 

function placeOrder(callback){
    setTimeout(() => {
        console.log("[1] Order is Placed");
        callback(); 
    }, 1000);
}
function cookFood(callback){
    setTimeout(() => {
        console.log("[2] Food is Cooking");
        callback(); 
    }, 5000);
}
function deliverFood(){
    setTimeout(() => {
        console.log("[3] Food Delivered...");
    }, 1000);
}

// Showing Async
// placeOrder(()=>{})
// cookFood(()=>{})
// deliverFood()

// Using Callback making it Synchronized
placeOrder(()=>{
    cookFood(()=>{
        deliverFood()
    })
})

// Keyword ::> 
//      Event Loop, 
//      Call Stack, 
//      Task Q, 
//      Micro Task Q