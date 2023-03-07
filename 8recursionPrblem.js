const prompt=require("prompt-sync")();

let n=parseInt(prompt("Enter the last term"));

function sum(n){
    let f=0;
    if(n>0){
        for(let i=1;i<=n;i++)
        {
            f=f+i;
        }
    }
    return f;
}
console.log(sum(n));