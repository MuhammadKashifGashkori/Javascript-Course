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

//Lesson 06 — Filter()
console.log("Lesson 06 Start");

// simple filter on Array
const numbers6 = [10, 15, 20, 25, 30];
const result6 = numbers6.filter(number => number > 20);
console.log(result6);

//
const students6 = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 35 }
];
const updatestudent6=students6.filter(student6=>student6.marks>50);
console.log(updatestudent6);

//Task 01
const numbers6t1 = [5, 12, 18, 25, 30, 7, 40];
const updatenumber6t1=numbers6t1.filter(num=>num>20);
console.log(updatenumber6t1);
//Task 02
const even=numbers6t1.filter(num=>num%2===0);
console.log(even);
// Task 03
const studentst3 = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 35 },
    { name: "Ayesha", marks: 72 }
];
const resultt3=studentst3.filter(student=>student.marks>=50);
console.log(resultt3);

// Task 04 
const productst4 = [
    { name: "Laptop", price: 120000, category: "Electronics" },
    { name: "Mouse", price: 2500, category: "Accessories" },
    { name: "Phone", price: 80000, category: "Electronics" },
    { name: "Keyboard", price: 5000, category: "Accessories" }
];
const catproducts=productst4.filter(product=>product.category === "Electronics");
console.log(catproducts);
// Task 05 
const pricproducts=productst4.filter(product=>product.price>10000);
console.log(pricproducts);

// Task 06 
const studentst6 = [
    { name: "Ali", marks: 80, age: 20 },
    { name: "Ahmed", marks: 45, age: 22 },
    { name: "Sara", marks: 90, age: 19 },
    { name: "Usman", marks: 65, age: 24 },
    { name: "Ayesha", marks: 72, age: 21 }
];

const updatestudents6=studentst6.filter(student=>student.marks>=70 && student.age<=21);
console.log(updatestudents6);

// Task 08
const studentst8 = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 35 },
    { name: "Ayesha", marks: 72 }
];
const updatestudentst8=studentst8.filter(student=>student.marks>=50);
const namestudentst8=updatestudentst8.map(student=>
    student.name
);
console.log(namestudentst8);
// method chaining 
const namet8=studentst8
    .filter(student=>student.marks>=50)
    .map(student=>student.name)
console.log(namet8);

// Product
const upproducts=productst4
    .filter(product=>product.price>10000)
    .map(product=>product.name)
console.log(upproducts);

// Task 10
const upproductst10=productst4
    .filter(product=>product.price>50000 && product.category === "Electronics")
    .map(product=>product.name)
console.log(upproductst10);

//Lesson 07 — Reduce()
console.log("Lesson 07 Start");

const numbers7 = [10, 20, 30, 40];

const total = numbers7.reduce((sum,number)=>{
    return sum+number;
},0);

console.log(total);

// Task 01 
const numberst7 = [10, 20, 30, 40, 50];
const totalt7=numberst7.reduce((sum,number)=>{
    return sum+number;
},0);

console.log(totalt7);

// Task 02 
const productst2 = [
    { name: "Laptop", price: 120000 },
    { name: "Mouse", price: 2500 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 30000 }
];
const pricet2=productst2.reduce((total,product)=>{
    return total+product.price;
},0);
console.log(pricet2);

// Task 03 
const cart = [
    { name: "Laptop", price: 120000, quantity: 1 },
    { name: "Mouse", price: 2500, quantity: 2 },
    { name: "Keyboard", price: 5000, quantity: 1 }
];
const bill=cart.reduce((total,product)=>{
    return total+(product.price*product.quantity);
},0);
console.log(bill); 

// Task 04 
const studentst4 = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 65 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 75 }
];
const totalt4=studentst4.reduce((total,student)=>{
    return total+student.marks;
},0)
console.log(totalt4);
// Task 05
const average=totalt4/studentst4.length;
console.log(average);
// Task 06
const maximum=studentst4.reduce((highest,student)=>{
    if (student.marks > highest.marks){

        return student;
    }
    return highest;
},studentst4[0])
console.log(maximum);
// Task 07 

const minimum=studentst4.reduce((lowest,student)=>{
    if (student.marks < lowest.marks){

        return student;
    }
    return lowest;
},studentst4[0])
console.log(minimum);

//Task 08 
const studentstask08 = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 35 },
    { name: "Ayesha", marks: 72 }
];
const resultsum=studentstask08
    .filter(student=>student.marks>=50)
    .reduce((total,student)=>{
        return total+student.marks;
    },0);
console.log(resultsum);
// Task 09
const cartavail = [
    { name: "Laptop", price: 120000, quantity: 1, available: true },
    { name: "Mouse", price: 2500, quantity: 2, available: false },
    { name: "Keyboard", price: 5000, quantity: 1, available: true },
    { name: "Monitor", price: 30000, quantity: 2, available: true }
];
const billcart=cartavail
    .filter(product=>product.available === true)
    .reduce((total,product)=>{
        return total+(product.price*product.quantity);
    },0);
console.log(billcart);

// Lesson 08 - Lesson 08 — Advanced Array Methods
console.log(" Lesson 08 Started");

const userfind = [
    { id: 1, name: "Ali", email: "ali@gmail.com" },
    { id: 2, name: "Ahmed", email: "ahmed@gmail.com" },
    { id: 3, name: "Sara", email: "sara@gmail.com" },
    { id: 4, name: "Usman", email: "usman@gmail.com" }
];
//Task 01
const resultfind=userfind.find(user=>user.id === 3);
console.log(resultfind);
 // Task 02

 const emailfind=userfind.find(user=>user.email === "sara@gmail.com");
console.log(emailfind);

// Sorting
const usproducts = [
    { name: "Laptop", price: 120000 },
    { name: "Mouse", price: 2500 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 30000 }
];
const sortproducts=usproducts.sort((a,b)=>b.price-a.price);
console.log(sortproducts);
 
//  Innclude
const skillsin = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];
console.log(skillsin.includes("React"));

//Task 11

const forstudents = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 65 },
    { name: "Sara", marks: 90 }
];
forstudents.forEach(student=>
    console.log(student.name," scored ",student.marks," marks")
)

forstudents.forEach((student,index)=>
    console.log("Student ",index+1,student.name," scored ",student.marks," marks")
)
// Task 11
const pstudents = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 35 },
    { name: "Ayesha", marks: 72 }
];
pstudents.forEach(student=>{
    if (student.marks>=50){
        console.log(`${student.name} - ${student.marks} - Pass`);
    }
    else{
        console.log(`${student.name} - ${student.marks} - Fail`)
    }
});
pstudents.forEach(student=>{
    console.log(`${student.name} - ${student.marks} - ${student.marks>=50?"Pass":"Fail"}`)
});

// Lesson 09 — Optional Chaining
console.log(" Lesson 09 Started");

const ocstudent = {
    name: "Ahmed",
    course: "Computer Science"
};
console.log(ocstudent.course?.marks);

const cuser = {
    name: "Ali",
    address: {
        city: "Multan"
    }
};
console.log(cuser.address?.city);
console.log(cuser.contact?.phone ?? "Unknown");

console.log(ocstudent.city ?? "City not available");

// Task o1
const dproduct = {
    id: 1,
    name: "Laptop",
    price: 120000,
    category: "Electronics"
};
const{name:productName,price:productPrice}=dproduct;
console.log(productName);
console.log(productPrice);

// Task 02
const puser2 = {
    name: "Ali",
    email: "ali@gmail.com",
    address: {
        city: "Multan",
        pcountry: "Pakistan"
    }
};
const {
    address: {city:userCity,pcountry:userCountry}
}=puser2
console.log(userCity);
console.log(userCountry);
const coursestt = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];
const [course1,course2,course3]=coursestt
console.log(course1);
console.log(course2);
console.log(course3);

const [firstcourse,...remainingcourse]=coursestt
console.log(firstcourse);
console.log(remainingcourse);

const userin = {
    sname: "Ahmed",
    email: "ahmed@gmail.com",
    age: 22,
    city: "Multan",
    country: "Pakistan"
};
const {sname,email,...otherinfo}=userin;
console.log(sname);
console.log(email);
console.log(otherinfo)
// Function Restructering 
const fstudent = {
    name: "Ahmed",
    marks: 85,
};
function showStudent({name:studentName,marks:studentMarks,course="Not Assigned"}){
    console.log(studentName);
    console.log(studentMarks);
    console.log(course);
};
showStudent(fstudent);

// Lesson 11 — Spread vs Rest: Real-World Practice
console.log("Lesson 11- Started ");

/// Spread 

const oldStudent = {
    name: "Ali",
    marks: 80
};

const updatedStudent = {
    ...oldStudent,
    marks: 90
};

console.log(updatedStudent);

const spproduct = {
    name: "Laptop",
    price: 120000,
    category: "Electronics",
    brand: "Dell"
};
const {spname,...sotherinfo}=spproduct;
console.log(spname);
console.log(sotherinfo);

