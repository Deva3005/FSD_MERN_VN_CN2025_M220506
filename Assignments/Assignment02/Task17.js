// 17. Write a function downloadFile(filename, callback) that prints 
// "Downloading [filename]..." after 2 seconds, then uses a callback to print 
// "Download complete!". 

function downloadFile(filename,callback) {
    setTimeout(() => {
        console.log(`Downloading ${filename}...`);
        callback();
    }, 2000);
}
function downloadComplete(){
    console.log("Download complete!");   
}

// Showing Async
// downloadFile("GTA San Andreas",()=>{})
// downloadComplete()

// With Callback making it sync
downloadFile("GTA San Andreas.zip",()=>{
    downloadComplete()
})
