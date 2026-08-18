import express from "express"
import mongoose from "mongoose";
import { Todo  } from "./models/Todo.js";
let conn=await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  const todo=new Todo({title:"Hello",desc:"Description of todo", isDone:false,days:4})
  todo.save()
  res.send("Hello")
});
app.get('/a',async(req, res) => {
  let todo=await Todo.findOne({}) 
  res.json({title:todo.title})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


