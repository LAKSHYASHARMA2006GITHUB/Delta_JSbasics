let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item  = document.createElement("li");  // add li items.
    item.innerText = inp.value;

    let delBtn = document.createElement("button"); //add delete button
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value= "";
})


ul.addEventListener("click",function(event){
   
    // console.dir(event.target.nodeName);  tells the which element is clicked
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})