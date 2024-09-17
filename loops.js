// for(let i=1;i<=15;i++){
//   if(i%2!=0){
//     console.log(`the odd numbers are ${i}`)
//   }
//   else{
//     console.log(`even numbers are ${i}`);
//   }
// }

// for(let i=1;i<=15;i=i+2){
//     console.log(`the odd numbers are ${i}`)
// }
// console.log("\n");
// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(`the even numbers are ${i}`)
// }

// for(let i=1;;i++){
//     console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//     console.log("outer loop");
//     for (let j = 1; j <= 3; j++) {

//         console.log(j);

//     }
//     console.log("inner loop")
// }

// while loop
// const movie = "avtar";
// let guess = prompt("enter the movie in your guess");

// while ((guess != movie) && (guess != "quit")) {
//    guess =  prompt("wrong movie take another guess:");
// }

// if(guess ==  movie){
//     console.log("you guess write!");
// }else if(guess == "quit"){
//     console.log("you quit the game");
// }

//loops with array

// let fruits =["mango","orange","strawberry","litchi","pineapple"];
// fruits.push("apple");
// fruits.unshift("blackberry");
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }
// console.log("\n")
// for (let i = fruits.length-1; i >= 0; i--){
//     console.log(i, fruits[i]);
// }


// let heros = [["ironman","hulk","captionAmerica","thor"],
// ["batman","superman","flash","wonderwomen"]];
// for(let i=0;i<heros.length;i++){
//     console.log(`list ${i}`);
//     for(let j=0;j<heros[i].length;j++){
//         console.log(j,heros[i][j]);
//     }
// }
// for of loop;
// let parts = ["brain","chest","biceps","triceps","abs","lats"];
// for(part of parts){
//     console.log(part);
// }

// nested for of loop

// let todo = []
// let req = prompt("please enter your request");

// while (true) {
//     if (req == "quit") {
//         console.log("game quitted");
//         break;
//     }

//     if (req == "list") {
//         console.log("--------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i])
//         }
//         console.log("--------------");
//     }

//     if (req == "add") {
//         let task = prompt("enter the request you want to :");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if (req == "delete") {
//         let idx = prompt("enter the task name you want to delete")
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("wrong request");
//     }
//    req =  prompt("please enter your request");
   
// }


let arr = [2,3,4,14,67,84,43,23,12,54];
let largest = 0;
for(let i=0;i<arr.length;i++){
   
if(largest<arr[i]){
    largest = arr[i];
}
   
}

console.log(largest);
