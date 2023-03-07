
const prompt=require("prompt-sync")();

let x=parseInt(prompt("Enter the number"));
function check(x){
if(x>0){
    console.log("Positive");
}
else if (x<0){
    console.log("Negetive");
}
else{
    console.log("Zero");
}
}
check(x);