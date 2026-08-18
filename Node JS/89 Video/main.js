
const express = require('express');
const blog  =require('./routes/blog')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    console.log("Get Request")
    res.send('Hello World!');
});
app.use('/blog',blog)
app.get('/index',(req, res)=> {
    res.sendFile("templates/index.html",{root: __dirname})
})
app.get('/api',(req,res)=>{
    res.sendFile("templates/test.json",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});