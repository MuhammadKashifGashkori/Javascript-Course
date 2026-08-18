const express = require('express');
const app = express();
const port = 3000;
app.set('view engine','ejs')

app.get('/', (req, res) => {
  const siteName="Codingaly"
  const searchText="Searching This"
  res.render("index.ejs",{siteName:siteName,searchText:searchText})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});