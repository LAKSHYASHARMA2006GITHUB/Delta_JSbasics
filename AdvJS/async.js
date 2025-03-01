// async function greet(){
//     return "laskhya";
// }
// greet();

// greet()
// .then((res)=>{
//    console.log("the promise was resolved:",res); 
// })
// .catch((err)=>{
//     console.log("error in the promise",err);
// })

// let demo = async()=>{
//     return 5;
// }

// demo().then((result)=>{
//     console.log("promise was successful",result);
// })
// .catch((error)=>{
//     console.log("error in the promise",error);
// })

 function getNUM(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        resolve();
    },1000)
})
}

async function demo2(){
await getNUM();
await getNUM();
await getNUM();
}

//json in javascript

let jsonres = 
'{ "fact": "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their tail horizontally or tucked between their legs while walking.", "length": 210 }';
console.log(jsonres.fact);

let validres  = JSON.parse(jsonres);
console.log(validres.fact);

let student = {
    name:"lakshya",
    rollno:124,
    marks:100
}

let jsvalid = JSON.stringify(student);
console.log(jsvalid);