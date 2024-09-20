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

// let id = setInterval(()=>{
//     console.log("hi shruti");
// },2000);


// let id1 = setInterval(() => {
//     console.log("hi Lakshya");
// },3000);


// let students ={
//     name:"Aman",
//     marks:95,
//     age:24,
//     getName: function(){
//         console.log(this);// global scope
//         return this.name;
//     }
//  ,
//     getMarks:()=>{
//      console.log(this); //parent scope of this function is ->window
//   return this.marks;
//     },
//     getInfo: function (){
//         setTimeout(()=>{  // arrow function prints the student object because his parent are normal function
//             console.log(this);
//         },2000)
//     },

//     getInfo2:function (){
//         setTimeout(function(){ //  function prints who calls him
//                                // so setTimeout calls him and it was the inbuilt function of the window object
//             console.log(this);
//         },2000)
//     }
// }

// // console.log(students.getName());
// // console.log(students.getMarks()); 
// console.log(students.getInfo()); 
// console.log(students.getInfo2()); 


let square = (n)=>  n*n;


console.log(square(2));

let id = setInterval(()=>{
    console.log("hello world")
},2000);

setTimeout(()=>{
    clearInterval(id);
},11000)