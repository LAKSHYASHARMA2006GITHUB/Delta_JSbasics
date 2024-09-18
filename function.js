function hello(){
    console.log("hi i am lakshya sharma!")
}

hello();
hello();

function printNum(){
    console.log("NUM");
}

printNum();
printNum();

function rollDice(){
    let random =  Math.floor(Math.random()*6)+1;
    console.log(random);
}

rollDice();

rollDice();

rollDice();

rollDice();


// fnctions with argunents
 function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);

 }

 printInfo("lakshya",24);
 printInfo("shruti",22);

 function avg(a,b,c){
   console.log(a+b+c/3);
 }

 avg(3,2,55);


 function table(n){
    for (let i = n;i<=n*10;i+=n){
        console.log(i);
    }
 }

 table(2);

 function sum (a,b){
    return a+b;
    // function is not reconize the any line of the code after the return statement.
 }

 let a =sum(1,2);
 console.log(a);


 function sum1t0n(n){
    let sum = 0;
    for (let i =1;i<=n;i++){
        sum +=i;
      
    }
     return sum;
 }
 let N  = sum1t0n(100);
 console.log(N);


 let str = ["hi","hello","bye","!"];

 function concat(str){
    let result = "";
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
 }

let res = concat(str);
console.log(res);