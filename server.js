require('./dbConnection');
const express = require('express');

const path = require('path');
const app = express();
const bodyParser =  require("body-parser");

app.use(express.static('/script.js'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


const sushiRoute = require('./routes/SushiRoutes')


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(5000, (e) => {
 if (!e) {
    console.log('Server launched on port 5000')
 } else {
    return console.log(e);
  }
})

app.use("/sushi", sushiRoute)