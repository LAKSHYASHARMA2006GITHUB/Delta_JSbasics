let div = document.querySelector("#dv");
let u = document.querySelector("#u");
let lis  = document.querySelectorAll("li");

div. addEventListener("click",function(){
    console.log("div was clicked");
})

u.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("ul was clicked");
})
for(li of lis){
    li.addEventListener("click", function (ev) {
        ev.stopPropagation();
        console.log("list was clicked");
    })
}

