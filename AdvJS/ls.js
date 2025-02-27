// // // function hello(){
// // //     console.log("hello called");
// // //     console.log("hello");
// // // }

// // // function demo(){
// // //     console.log("calling hello function");
// // //     hello();
// // // }

// // // console.log("calling demo function");
// // // demo();
// // // console.log("ok bye ")


// // // function one(){
// // //     return 1;
// // // }

// // // function two(){
// // //     return one()+ one();
// // // }

// // // function three(){
// // //     let ans = two() +one();
// // //     console.log(ans);

// // // }

// // // three();


// // // setTimeout(function(){  //  note that javascript is a single threaded language. 
// // //     console.log("lakshya sharma");
// // // },2000)


// // // setTimeout(function () {
// // //     console.log("alos");
// // // }, 2000)

// // // console.log("hello");

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed successfully");
        }, delay)

    })
}

// callback hell in javascript
changeColor("red", 1000)
.then(()=>{
    console.log("red color was printed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was printed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was printed");
})
.catch(()=>{
console.log("error occured");
})

// changeColor("red", 1000, () => {
//     changeColor("yellow", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("purple", 1000, () => {
//                     changeColor("pink", 1000);
//                 });
//             });
//         });
//     });
// });

// // // callback nesting is called callback hell.
// // // to avoid callback hell we use promises in javascript.
// // // promises are used to avoid callback hell in javascript.
// // // promises are used to avoid callback nesting in javascript.
// // // promises are used to avoid callback chaining in javascript.
// // // promises are used to avoid callback pyramid of doom in javascript.

// // function saveTODB(data, sucess, failure) {
// //     let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //     if (internetSpeed > 4) {
// //         sucess();
// //     }
// //     else {
// //         failure();
// //     }
// // }

// // saveTODB("lakhya",()=>{
// // console.log("data saved successfully");
// // saveTODB("Tarnesh",()=>{
// //     console.log("data2 is saved successfully");
// //     saveTODB("neelam",()=>{
// // console.log("data3 is saved successfully");
// //     },()=>{
// // console.log("data3 is not saved successfully");
// //     });

// // },()=>{
// //     console.log("data2 is not saved successfully");
// // })
// // },()=>{
// // console.log("data not saved successfully");
// // })


// // promises in javascript
// function SaveToDB(data) {
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             success("successfully saved");
//         }
//         else {
//             failure("not successfully saved");
//         }
//     })
// }

// SaveToDB("lakshya");


// SaveToDB("lakshya").then((result)=>{
//     console.log("data was resolved");
//     console.log("result of promise:", result);
//     return SaveToDB("tarnesh");
// })
// .then((result)=>{
//     console.log("data1 was resolved");
//     console.log("result of promise",result);
//     return SaveToDB("neelam");
// })
// .then((result)=>{
//     console.log("data2 was resolved");
//     console.log("result of promise", result);
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise:", error);
// })