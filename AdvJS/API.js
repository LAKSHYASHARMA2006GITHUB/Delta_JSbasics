let url = "https://catfact.ninja/fact";
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

async function getfacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(res);
        console.log(data.fact)
    }
    catch(e){
        console.log("error",e);
    }
    console.log("hi i am happy today");     
    
}
getfacts();