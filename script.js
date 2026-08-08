// Lesson 01: Variables 
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

// Destructuring in Javascript
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