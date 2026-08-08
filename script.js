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
console.log("Lesson 03 Started");
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
 console.log("Lesson 04 Started");

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
const frontend1 = ["HTML", "CSS", "JavaScript"];
const backend1 = ["Node.js", "Express", "MongoDB"];
const combineSkills=[...frontend,...backend];
// Task 03
const task={
    ...updatestudent,
    semester:5
}

//Lesson 05 — JavaScript Map()

console.log("Lesson 05 Started");
const numbers = [1, 2, 3, 4, 5];

const double =numbers.map(num=>num*2);
console.log(double);

const studentsmap = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 65 },
    { name: "Sara", marks: 90 }
];
 const student_names=studentsmap.map(std=>
    {std.name}
);
 console.log(student_names);

 // Task 01
 const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mouse", price: 2500 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 30000 }
];
const product_names=products.map(p_name=>p_name.name);
console.log(product_names);
//  Task 02
const productwithtax=products.map(p_price=>({
        ...p_price,
        productprice:p_price.price*1.10
    }));
console.log(productwithtax);

// Task 03
const no = [5, 10, 15, 20, 25];
no.map((num,index)=>
    console.log(num*3)

);

//Task 04
const namest3 = ["ali", "ahmed", "sara", "usman"];
namest3.map(sn=>
    console.log(sn.toLocaleUpperCase())
)

// Task 05 
const studentst5 = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 65 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 72 }
];
const updatestudentt5=studentst5.map(stnd=>
({
    ...stnd,
    marks:stnd.marks+5
}));
//Task 6
console.log(updatestudentt5);
    const result = studentst5.map(stnd =>
        `${stnd.name} scored ${stnd.marks} marks`
    );

    console.log(result);
//Task 07
const courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];
const updatecourse=courses.map((coursename,index)=>
    `${index+1}. ${coursename}`    
);
console.log(updatecourse);

// Task 08
const users = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com",
        age: 22
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@gmail.com",
        age: 25
    },
    {
        id: 3,
        name: "Sara",
        email: "sara@gmail.com",
        age: 21
    }
];
/*const resultt8=users.map(user=>({
    id:user.id,
    name:user.name
}));
console.log(resultt8);

const resultt8_1=users.map(({id,name})=>({
    id,
    name
}));
console.log(resultt8_1);*/
const resultfinal=users.map((user,index)=>
    `User ${index+1}: ${user.name} - ${user.email}`
);
console.log(resultfinal);