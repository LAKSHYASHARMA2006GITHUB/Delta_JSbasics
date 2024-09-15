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

let fruits =["mango","orange","strawberry","litchi","pineapple"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}