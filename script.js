// Lesson 02: Variables 
console.log("Lesson 02 Started")
console.log("Kashif");
let name="Kashif Gashkori";
let age=35;
console.log(name)
console.log(age)
age=35;
console.log("Age after Change",age);
const country="Pakistan";
console.log("Country before change", country)

// Data Types

let student = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof student);

// Lesson 03 - Destructuring in Javascript
console.log("Lesson 03 Started")
/// Objects 
const students={
    s_name:"Ali",
    s_age:25,
    s_height:3.4
}
const {s_height,s_name,s_age}=students;
console.log("Values in Destructuring")
console.log(s_name);
console.log(s_age);
console.log(s_height);
 // Arrays 
 const colors=["Red","Green","Blue"];
 const [first,second,third]=colors;
 console.log("Arrays examples");
 console.log(first);
 console.log(second);
 console.log(third);

 // Lesson 04 — Spread Operator
 console.log("Lesson 04 Started")

 const fruits=["Apple","Banana","Mango"];
 const updatefruits=[...fruits,"Orange"];
 console.log(updatefruits);

 // merge two arrays:
 const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const skills = [...frontend, ...backend];

console.log(skills);
// Task 01
const studenttask = {
    name: "Ahmed",
    age: 21,
    course: "Computer Science"
};
const updatestudent={
    ...studenttask,
    age:22,
    city: "Multan"
}
// Task 02 
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const combineSkills=[...frontend,...backend];
// Task 03
const task={
    ...updatestudent,
    semester:5
}