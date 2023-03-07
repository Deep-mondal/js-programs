const prompt=require("prompt-sync")();

let x=parseInt(prompt("Enter a number"));

function oE(x){
    if(x%2==0){
        console.log("Even");
        return;
    }
    console.log("Odd");
}
oE(x);