const express = require('express');
const mongoose=require("mongoose")
const Employee=require("./models/Employee")
mongoose.connect('mongodb://127.0.0.1:27017/company');
const app = express();
const port = 3000;
app.set('view engine','ejs')
const getRandom=((arr)=>{
    let rno=Math.floor(Math.random()*(arr.length-1))
    return arr[rno]
})

app.get('/', (req, res) => {
  res.render('index',{foo:'Foo'});
});

app.get('/generate', async(req, res) => {
    await Employee.deleteMany({})
  let randomNames=["Kashif","Ali","Khan","Noman"];
  let randomLang=["C","C++","Python","HTML","CSS"];
  let randomCities=["Lahore","Kot Adu","Multan","Muzaffargarh","Layyah"];
  for(index=0; index<10; index++){
     let a=await Employee.create({
    name:getRandom(randomNames),
    salary:1000,
    Language:getRandom(randomLang),
    city:getRandom(randomCities),
    isManager:(Math.random(0.5)>0?true:false)
  });
  }
 
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});