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


//  let str = ["hi","hello","bye","!"];

//  function concat(str){
//     let result = "";
//     for(let i=0;i<str.length;i++){
//         result +=str[i];
//     }
//     return result;
//  }

// let res = concat(str);
// console.log(res);


let sum1 = 54;  //global scope=> use everywhere in the file .
function add(){
    let sum1 = a+b; //function scope => use only inside the function.
    console.log(sum1);

}

console.log(sum1);


let age = 24;
if(age>18){
    let str = "adult";  // block scope
}
//  console.log(str);  // this is not print because of this in not inside the block scope


function out(){
    let x = "my name is laskya";
    let y = "Her name is shruti";

    function inn(){  //lexical scope =>used the variables which is pre declared before
                      // the function.
        console.log(x);
        console.log(y);
    }
 inn();
}

let o = out();
console.log(o)



//function expression as variable
 
// let sum = function (a,b){
//     return a+b;
// }

let helloo = function(){
    console.log("helloo");
}

console.log(helloo);
console.log(helloo());

//higher order function

function multiplegreet(func,count){
    for(let i=1; i<=count;i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multiplegreet(greet,120);

// evenoddfactory
function evenoddfactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request== "even"){
        return function(n){
            console.log(n % 2 == 0)
        }
       
    }
    else{
        console.log("wrong request");
    }
}
let request = "odd";
console.log(evenoddfactory(request));   