// let form = document.querySelector("form");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//    let user  = this.elements[0]; //form.elements[0];
//    let pass  = this.elements[1];  //form.elements[1]; 
//    console.dir(user)
//    console.log(user.value);
//    console.log(pass.value);
//    alert(`hi ${user.value}, your password is ${pass.value}`);
// })
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
})

form.addEventListener("load",function(){
    console.log("page was loaded");
})
let user = document.querySelector("#user"); 

user.addEventListener("change",function(){  //It tracks only the change if any occur
                                             // in the textarea..
    console.log("input changed");
    console.log("final value",this.value);
})
user.addEventListener("input",function(){ //it tracks only the change in the every step
    console.log("input changed");
    console.log("final vlaue",this.value);
})

// user.addEventListener("mouseout",function(){
//     console.log("input changed");
//     console.log("final value",this.value);
// })

// user.addEventListener("keypress", function () {
//     console.log("key pressed");
//     console.log("again pressed", this.value);
// })


user.addEventListener("load",function(){
    console.log("page loaded");
})

let inp =  document.querySelector("#text");
let p =  document.querySelector("p");
inp.addEventListener("input",function(e){
    const cleanedValue = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "");
    inp.value = cleanedValue;
    p.innerText = inp.value;
})

// some features in the events

let btns = document.querySelector("#btn");

btns.addEventListener("click",function(){
    btns.style.backgroundColor = "green";
})
