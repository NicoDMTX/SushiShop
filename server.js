const express = require('express');
const app = express();

app.listen(5000, (e) => {
 if (!e) {
  console.log('Server launched on port 5000')
 } else {
  return console.log(e);
 }
})