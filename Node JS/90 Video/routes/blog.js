const express = require('express');
const router = express.Router();


//app.use(express.static('public'))
//Middleware 1
router.use((req,res,next)=>{
   
    console.log("mid1")
    next()
})

//Middleware 1
router.use((req,res,next)=>{
    console.log("mid2")
    //res.send(`Middle awear 2 ${Date.now()} ${req.method} `)
    next()
})

router.get('/', (req, res) => {
  res.send('Hello World! Blog');
});
router.get('/about', (req, res) => {
  res.send('Hello Blog about!');
});
router.get('/contact', (req, res) => {
  res.send('Hello Blog contact!');
});

module.exports=router