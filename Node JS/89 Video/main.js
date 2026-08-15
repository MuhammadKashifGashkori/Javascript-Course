const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
    console.log("Get Request")
    res.send('Hello World!');
});
app.post('/add', (req, res) => {
    console.log("its post request")
    res.send('Hello World Post!');
});
app.get('/index',(req, res)=> {
    res.sendFile("templates/index.html",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});