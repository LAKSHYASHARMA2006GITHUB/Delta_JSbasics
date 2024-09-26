// let btns = document.querySelectorAll("button");
// // console.log(btn);
// for(btn of btns){
//     // btn.addEventListener("click",sayhi)  // used for the function calling
//     // btn.addEventListener("click",say)
//     btn.addEventListener("dblclick",function(){
//         console.log("button clicked two times")
//     });
// }
// function sayhi(){ // function that print the alert
//     alert("hello");
// }

// function say() { // function that print the alert
//     alert("Hi i am lakshya");
// }
 
let btn = document.querySelector("button");
setInterval(()=>{
    btn.addEventListener("click", function () {
        let h3 = document.querySelector("h3");
        let randomColor = gotRandomColor();
        h3.innerText = randomColor;

        let div = document.querySelector("div");
        setInterval(() => {
            div.style.backgroundColor = randomColor;
        }, 1000)
    });

},2000)

function gotRandomColor(){
    let red = Math.floor(Math.random()*255);

    let green = Math.floor(Math.random() * 255);

    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}