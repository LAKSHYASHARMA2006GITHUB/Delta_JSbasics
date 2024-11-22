let p = document.querySelector("p");
p.addEventListener("click",function(){
console.log("this paragraph was clicked");
});

let div = document.querySelector("div");
div.addEventListener("mouseenter",function(){
console.log("curser was enter")
});

let btn  = document.querySelector("button");
let head1 = document.querySelector("h1");
let head2 = document.querySelector("h2");
let head3  = document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "aqua";
}


btn.addEventListener("click",changeColor);
head1.addEventListener("mouseenter", changeColor);
head2.addEventListener("mouseenter", changeColor);
head3.addEventListener("mouseenter", changeColor);

let inp = document.querySelector("input");
inp.addEventListener("keydown",function(){
    console.log("key was pressed down");
});

inp.addEventListener("keyup", function (event) {
    console.log("code was =",event.code);
    console.log("key was =", event.key);
    console.log("key was pressed up");
})