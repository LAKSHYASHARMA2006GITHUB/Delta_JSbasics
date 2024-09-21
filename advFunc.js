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


// let square = (n)=>  n*n;


// console.log(square(2));

// let id = setInterval(()=>{
//     console.log("hello world")
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },11000)

//Array methods

let arr = [1,2,3,4,5];

let print = function(el){
   console.log(el)
}

arr.forEach(print);

//compact form 
console.log("\n")
arr.forEach((el)=>{
    console.log(el)
})

//forEach for arr of objects

let stu = [
    {
        Name:"Lakshya",
        marks:98
    },{
        Name: "Shruti",
        marks: 97 
    },
    {
        Name:"akshat",
        marks:99
    }
]
// array methods with functions
stu.forEach((stu)=>{
    console.log(stu)
console.log(stu.marks);
})


// Map
let dou = stu.map((el)=>{
    return el.marks;
})

let gpa = stu.map((el)=>{
    return el.marks/10;
})
console.log(gpa);

// every method

let arra = [1,2,3,5,7,9];
let even = arra.every((el)=>{
return el%2 !=0
})
console.log(even)

let finar = [1,2,3,4];

let finalval = finar.reduce((res,el)=>{
    console.log(res);
    return res+el;
})

console.log(finalval);


let max = finar.reduce((maxim,el)=>{
    if(maxim<el){
        return el
    }
    else{
        return maxim
    }
})

console.log(max);
//questions 1
let arrr = [-10,10,20,30,40,50];
let nums3 = arrr.every((el)=>{
    return (el%10 ==0); 
})

console.log(nums3);

//questions 2

let min = arrr.reduce((min,el)=>{
     if(el<min){
        return el;
     }
     else{
        return min;
     }
})

console.log(min);

// defalit paramerters

function sums (a,b=2){
return a+b;
}

console.log(sums(1));

//spread method in Js
let arar =[1,2,4,6,3,8,4,2,6,8,5]
console.log(...arar);
console.log(Math.max(...arar));
console.log(Math.min(...arar));
console.log(..."lakshya");


let odd = [1,3,5,7,9];
let eve = [2,4,6,8,10];
console.log(...odd ,  ...eve);


//spread with the object literals
const data = {
    Email:"lakshyasharma11042006@gmail.com",
    pass:"lkijda"
}

let datcpy = {...data,id:123,Name:"lakshya sharma"}
console.log(data)
console.log(datcpy);

let rra = [1,2,3,4,5];
let obj  = {...rra};
console.log(obj)


let obj1 = {..."hello"};
console.log(obj1);

//destructuing :Storing values of array into multiple variables.
let players = ["tony","steve","ender","tourist","steven"];
// multiple variables
let[winner,runnerup,...others] = players;
console.log(others);

//destructuring with objects

let folks ={
    name:"lakshya",
    age:24,
    mobNO:9785554187,
    username:"lakshya5727",
    pass:"abcd"
}

let {username:user,pass:password}= folks;