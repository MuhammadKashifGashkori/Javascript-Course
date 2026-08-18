const express = require('express');
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('hello world');
});
router.get('/about', (req, res) => {
  res.send('hello about');
});
router.get('/about/:slug', (req, res) => {
  res.send(`hello about ${req.params.slug}`);
});
module.exports=router