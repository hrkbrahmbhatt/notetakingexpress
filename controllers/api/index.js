var express = require("express");
var json = express.Router();
const axios = require('axios');


axios.post('https://ey8ola9nmf.execute-api.us-east-2.amazonaws.com/hiring', {
  name: 'Hardik Brahmbhatt',
  email: 'hrkbrahmbhatt@gmail.com'
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})

module.exports = json;
