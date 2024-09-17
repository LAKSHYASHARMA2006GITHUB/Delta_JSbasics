// Object literals in javascript .
const student = {
    name: "lakshya",
    age: "24",
    Salary: 2400000
};
console.log(student);

let item = {
    name: "bottle",
    weight: "100gm",
    color: ["red", "pink"]
}
console.log(item);

//twitter concept

let twit = {
    username: "lakshya@5727",
    content: "loream@ found the criminal",
    likes: 45343,
    reposts: 234,
    tags: 35
}

console.log(twit.username);
console.log(twit.content);
console.log(twit.tags);


const obj = {
    1: "a",
    2: "b",
    3: 'c',
    null: "d",
    undefined: "e",
    apple: "f"
}
console.log(obj.null);

// Add ,delete and update the values in the object literals.
let stu = {
    Name: "lakshya",
    marks: 96.45,
    rollNo: "22ESKCS124",
    age: 24
};
console.log(stu);
stu.marks = "A++"
stu.age = 26;
stu.gender = "male";
delete stu.gender;
console.log(stu);


const CS = {
    sectionA: {
        students: 69,
        group: 2
    }
    ,
    sectionB: {
        students: 70,
        group: 2
    },
    sectionC :{
        students:68,
        group:2
    },
    sectionD :{
        students:65,
        group:1
    }
}
console.log(CS);
console.log(CS.sectionA);
console.log(CS.sectionB);
console.log(CS.sectionC);
console.log(CS.sectionD);
CS.sectionD.group = 2
console.log(CS.sectionD);
console.log(CS.sectionA.students);

// array of objects
let aoo = [
    {
        name:"lakshya",
        marks:98
    },
    {
        name:"shradha",
        marks:97
    
    },
    {
        name:"akshat",
        marks:82
    }
]

console.log(aoo);
console.log(aoo[0].name);
console.log(aoo[1].marks);
aoo[1].marks = 96;
console.log(aoo[1].marks);
console.log(aoo);


let num = -12.32;
let num1 = 12.00001;
console.log(Math.abs(num)) ;
console.log(Math.pow(2,24));
console.log(Math.floor(num));
console.log(Math.ceil(num1));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) ); //here 10 not be came because 
//because of the range of the randon are 0 to 1 and 1 not include in it.
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 5) + 21);

// guess game
let gmax = prompt("enter the max limit of the number");
let random = Math.floor(Math.random()* gmax)+1;
let guess = prompt("Hey user! enter the number!");

while(true){
    if(guess == "quit"){
        console.log("game quitted");
        break;
    }

    if(guess  == random){
        console.log("write guess! congrats!");
        break;
    }
    else if (guess < random){
        guess = prompt("guess if two short ! just do it!")
    }
    else if(guess > random){
        guess = prompt("guess if two long ! just do it!");
    }
    
}
