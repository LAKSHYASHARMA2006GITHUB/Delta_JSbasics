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
let user = document.querySelector("#user"); 

user.addEventListener("change",function(){  //It tracks only the change if any occur
                                             // in the textarea..
    console.log("input changed");
    console.log("final value",this.value);
})