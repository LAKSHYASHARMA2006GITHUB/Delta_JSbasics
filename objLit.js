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
