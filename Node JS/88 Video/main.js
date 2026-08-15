const express = require('express');
const app = express()
const port = 3000
app.use(express.static('Public'))
app.get('/', (req, res) => {
  res.send('Hello World!1111')
})
app.get('/:slug/:bye', (req, res) => {
  
  res.send(`Hello ${req.params.slug} ${req.params.bye}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})