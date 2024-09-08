// let msg = ["lakshhya",24,2.4]; //Array are immutable
// msg[0]="sharma";
// console.log(msg);

let brands = ["BMW","mahindra","mercedies","Toyota"];
brands.push("Dogdge");
console.log(brands);
brands.pop();
console.log(brands);
brands.unshift("mclren");
console.log(brands);
 let block  = brands.shift();
 console.log(brands);
console.log(block);


let month = ["january","febuary","march","april"];
console.log(month);
month.shift();
month.shift();
month.unshift("july");
month.unshift("june");
console.log(month);

let idx = month.indexOf("january");
console.log(idx);

let con = month.concat(brands);
console.log(con);

let rev = month.reverse();
console.log(rev);

let spl = month.splice(3);
console.log(spl);
console.log(month);

let addspl = month.splice(0,0,"september","october");
console.log(addspl);
month.reverse();
console.log(month);
let add = month.splice(1,1,"june");
console.log(add);
console.log(month);
let sort  = month.sort();
console.log(month);


let mont = ["january","febuary","march","april"];
console.log(mont);
mont.splice(0,2,"july","june");
console.log(mont);

let tech = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(tech);
let lang  = tech.reverse().indexOf("javascript");
console.log(lang);
console.log(tech);

