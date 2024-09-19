const student ={   //this keyword in javascript.
    name:"lakshya",
    age:24,
    math:94,
    eng:99,
    comm:99,

    getAvg(){
        console.log(this);
       let avg = (this.math + this.eng + this.comm)/3;
       console.log(`${this.name} got the avgerage marks ${avg}`);
    }
}

student.getAvg();


// try and catch statement.
try{  // through the error
    console.log(a);
}
catch   { // catch the error
    console.log("error caught");
    
}

//arrow functions

const sum =(a,b)=>{
    return a+b;
}

console.log(sum(43,57));

const cube = (a) => (a * a * a)
  


console.log(cube(32));

const multi =(a,b)=>a*b;  //implict return in arrow function.

console.log(multi(2,3));


//setTimeout function => basically it used for the API callings,request response;

// console.log("hi there");

// setTimeout(()=>{
//     console.log("hi shruti")
// },2000);

// setTimeout(() => {
//     console.log("Lakshya this side");
// }, 4000);

//setInterval

let id = setInterval(()=>{
    console.log("hi shruti");
},2000);


let id1 = setInterval(() => {
    console.log("hi Lakshya");
},3000);
