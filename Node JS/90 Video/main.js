const express = require('express');
const app = express();
const port = 3000;
const blog=require('./routes/blog')
//app.use(express.static('public'))
//Middleware 1
app.use('/blog',blog)
app.use((req,res,next)=>{
    
    res.send(`Middle awear 1 ${Date.now()} ${req.method} `)
    console.log("mid1")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('Hello about!');
});
app.get('/contact', (req, res) => {
  res.send('Hello contact!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});