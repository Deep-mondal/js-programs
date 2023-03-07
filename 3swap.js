const prompt=require("prompt-sync")();

let a= parseInt(prompt("Enter a number"));
let b= parseInt(prompt("Enter another number"));
var c;
console.log(a,b);
c=a;
a=b;
b=c;
console.log(a,b);