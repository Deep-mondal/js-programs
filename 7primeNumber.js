const prompt=require("prompt-sync")();

let x=parseInt(prompt("Enter a number:"));

function prime(x){
    if(x==0){
        console.log("Not-prime");
        return;
    }
    if(x==1){
        console.log("Prime");
        return;
    }
    if(x==2){
        console.log("Prime");
        return;
    }
    let h=x/2;
    let c=0;
    for(let i=2;i<=h;i++){
        if(x%i==0){
            c++;
        }
    }
    if(c==0){
        console.log("prime");
        return;
    }
    console.log("Not-prime");

}
prime(x);