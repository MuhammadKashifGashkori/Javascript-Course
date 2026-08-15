import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
import Product from './Product'
function App() {
    /// Product Array 
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 120000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Mobile",
            price: 60000,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Headphones",
            price: 5000,
            category: "Accessories"
        }
    ];
    // useState() Method 
   // const [marks,setMarks]=useState(50);
    const [count,setCount]=useState(0);
    // Add student with button using useState()
    const [students,setStudents]=useState([
        {
            id:1,
            name:"Kashif",
            marks:78
        },
        {
            id:2,
            name:"Ali",
            marks:80
        }
    ])

    // student name from user form 
    const[name,setName]=useState("");
    const[marks1,setMarks1]=useState("");
    // addStudent Function 
    function addStudent(){
        const newStudent={
            id:students.length+1,
            name:{name},
        };
        setStudents([
            ...students,
            newStudent
        ]);
        setName("");
        setMarks1("");
    }

    return (
        <div>
            <div className="student-marks">
                <h1>Student Marks: {marks}</h1>
                <button onClick={()=>setMarks(marks+5)}>Increase Marks</button>
                <button onClick={()=>setMarks(marks>0?marks-5:0)} >Decrease Marks</button>
            </div>
            <div className="setCount">
                <h1>Count:{count}</h1>
                <button onClick={()=>setCount(count+1)}>Increase</button>
            </div>
          <h1>Pruduct List</h1>
          {
            products.map(product=>(
                <Product
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                />
            ))}

            <div className="student-record">
                <h2>Student Management System</h2>
                <div className="addbutton">
                    <button onClick={addStudent}>
                        Add Student
                        </button>
                </div>

                <div>
                    {students.map(student=>(
                    <div key={student.id}>
                        <h3>Name: {student.name}</h3>
                        <p>Marks: {student.marks}</p>
                    </div>
                    ))}
                </div>

                <div className="live-record-show">
                    <input 
                    type="text"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                    <input 
                    type="text"
                    value={marks1}
                    onChange={(e)=>setMarks1(e.target.value)} />
                    <p>Name:{name}</p>
                    <p>Marks:{marks1}</p>
                </div>
                
            </div>
        
        </div>
    );
}

export default App;
