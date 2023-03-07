const prompt=require("prompt-sync")();

let a=parseInt(prompt("Enter first number"));
let b=parseInt(prompt("Enter second number"));
let c=parseInt(prompt("Enter third number"));

function large(a,b,c){
    if(a>b && a>c){
        return a;
    }
    if(b>c && b>a){
        return b;
    }
    if(c>a && c>b){
        return c;
    }
    
}
console.log(large(a,b,c));