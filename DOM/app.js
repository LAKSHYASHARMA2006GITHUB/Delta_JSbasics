
// selcting the element the className
let oldImg = document.getElementsByClassName("oldImg");


for (let i = 0; i < oldImg.length; i++) {
    oldImg[i].src = "assets/spiderman_img.png";
    console.log(`the vlaue of image are ${i} is changed`)
}

// properties and methods In DOM
let para = document.querySelector('#description');
para.innerHTML = "<b> hi i am peter parkor </b>";

// gettters and setters in DOM

let img = document.querySelector("img");
console.log(img.getAttribute("id"));
// setting the attribute
console.log(img.setAttribute('src', 'assets/creation_1.png'));


let img1 = document.querySelector(".oldImg");

console.log(img1.setAttribute('src', 'assets/creation_2.jpeg'));

// using style properety in DOM
// but we cannot  use  more this style property in our js file because it is use 
// more inline css .
// to avoid style manupulating we use classObj
let links = document.querySelectorAll(".box a")
for (link of links) {
    link.style.color = "purple";
}

let linked = document.querySelectorAll("body");
for (body of linked) {
    body.style.backgroundColor = "lightBlue";
}

// example of the class list
let heading = document.querySelector('h1');
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

console.log(nav.children);  // children
console.log(nav.parentElement); // parentElement

let nav1 = document.querySelector(" li ul");
console.log(nav1.children[0].nextElementSibling) //nxtElementSibling.

// Adding elements

let newp = document.createElement('p') // create the new element
newp.innerText = "hi i am the dr strange";
let bodies = document.querySelector('body');
bodies.appendChild(newp);
bodies.prepend("hi i am time controller");
bodies.append("and i am also a neurolisgist")

let newbtn = document.createElement('button')
newbtn.innerText = "click me";
let bodie = document.querySelector('.box');
bodie.appendChild(newbtn);
newbtn.remove(); // to remove the element use the created variable  to remove.


let newhead = document.createElement("h1");
newhead.innerText = "AND this is all about the marvel spiderMAN"
let bod = document.querySelector("body");
bod.appendChild(newhead);



// here i cereated a button 
let newbtn1 = document.createElement('button')
newbtn1.innerText = "newButton";

newhead.insertAdjacentElement('afterend', newbtn1);
newbtn1.remove();







