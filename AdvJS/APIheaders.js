// let url3 = " https://api.potterdb.com/v1/characters";
let url4 = "http://universities.hipolabs.com/search?name=";

// async function getJokes(){
//     try{
//         const config = {headers:{Accept:"text/html"}};
//         let res = await axios.get(url3,config);  
//         console.log(res.data.data[0].attributes);
//     }
//     catch(e){
//         console.log("error--",e);
//     }
// }

let btn2 = document.querySelector(".btns");
btn2.addEventListener("click",async()=>{
    let country = document.querySelector("#inp").value;
    console.log(country)
    let uni = await getUniversities(country);
    showList(uni);
})

//print the list of universities in the html page.
function showList(uni){
    let ul = document.querySelector("#list");
    ul.innerHTML = "";   //for remove the previous list.    
    for(col of uni){
        console.log(col);

        let li = document.createElement("li"); //for creating the list.
        li.innerText = col.name;
        ul.appendChild(li);
    }
    
}

async function getUniversities(country){
    try{
        let res = await axios.get(url4 + country);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error--",e);
        return[];
    }
}