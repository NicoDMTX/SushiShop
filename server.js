require('./dbConnection');
const express = require('express');

const app = express();
const bodyParser =  require("body-parser");
const cors = require('cors')

app.use(express.static('/script.js'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());

const sushiRoute = require('./routes/SushiRoutes')

app.listen(5000, (e) => {
 if (!e) {
    console.log('Server launched on port 5000')
 } else {
    return console.log(e);
  }
})

app.use("/sushi", sushiRoute)