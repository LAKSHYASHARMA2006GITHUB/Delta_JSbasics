let oldImg = document.getElementsByClassName("oldImg");


for(let i = 0;i<oldImg.length;i++){
    oldImg[i].src =  "assets/spiderman_img.png";
    console.log(`the vlaue of image are ${i} is changed`)
}

// properties and methods In DOM
let para = document.querySelector('#description');
para.innerHTML = "<b> hi i am peter parkor </b>";

// gettters and setters in DOM

let img = document.querySelector("img"); 
console.log(img.getAttribute("id"));
// setting the attribute
console.log(img.setAttribute('src','assets/creation_1.png'));


let img1 = document.querySelector(".oldImg"); 

console.log(img1.setAttribute('src','assets/creation_2.jpeg'));

// using style properety in DOM
// but we cannot  use  more this style property in our js file because it is use 
// more inline css .
// to avoid style manupulating we use classObj
let links = document.querySelectorAll(".box a")
for (link of links){
    link.style.color = "purple";
}

let linked  = document.querySelectorAll("body");
for (body of linked){
    body.style.backgroundColor = "lightBlue";
}

// example of the class list
let heading  = document.querySelector('h1');
heading.classList.add("green");
// heading.classList.remove("green"); // to remove the class list  
//note:Cannot use the set attributes in place of the 
//classObj.

console.log(heading.classList)  

// navigation in js
// 1. parentelement 
//2. children
// 3.PreviousElement/nextElementsibling
let nav = document.querySelector(".box");

console.log(nav.children);
console.log(nav.parentElement);
let nav1 = document.querySelector(" li ul");
console.log(nav1.children[0].nextElementSibling)