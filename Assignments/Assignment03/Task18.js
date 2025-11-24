// 18. Create functions startExam(callback), evaluateExam(callback), and 
// declareResult() using callbacks so the output appears in sequence with 
// delays: 
// Exam started → Evaluating answers → Result declared. 

function startExam(callback){
    setTimeout(() => {
        console.log("[1] Exam Started...");
        callback();
    }, 3000);
}
function evaluateExam(callback){
    setTimeout(() => {
        console.log("[2] Evaluating answers");
        callback();
    }, 7000);
}
function declareResult(){
    setTimeout(() => {
        console.log("[3] Result declared!!!");
    }, 2000);
}

// Without Sync
// startExam(()=>{})
// evaluateExam(()=>{})
// declareResult()

// Using Call backs
startExam(()=>{
    evaluateExam(()=>{
        declareResult()
    })
})