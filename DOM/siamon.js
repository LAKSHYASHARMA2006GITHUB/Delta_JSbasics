// step first 
let gameseq = [];
let userseq = [];
let btns = ["green","blue","red","yellow"];

let Started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
if(Started == false){
    console.log("game started");
    Started = true;
    levelup();
}

})



// step two
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
    console.log(h2);
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`)

    btnFlash(randomBtn);
}








