let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error",err);
// })

// console.log("hi i am happy today");

let btn = document.querySelector("button");
let btn1 = document.querySelector(".btn1")

btn1.addEventListener("click", async () => {
    let link = await getImage();
console.log(link);
    let I = document.querySelector("#imgs");
    I.src = link;

}
)

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch (e) {
        console.log("error--", e);
    }
}


btn.addEventListener("click",async ()=>{
let fact =  await getfacts();
// console.log(fact);
let p  = document.querySelector(".result");
p.innerText = fact;  
}
)


async function getfacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("error--",e);
    }
    console.log("hi i am happy today");

//     // try{
//     //     let res = await fetch(url);
//     //     let data = await res.json();
//     //     console.log(res);
//     //     console.log(data.fact)
//     // }
//     // catch(e){
//     //     console.log("error",e);
//     // }
//     // console.log("hi i am happy today");     
    
}
// getfacts();




