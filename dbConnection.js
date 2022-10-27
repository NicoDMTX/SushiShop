const mongoose = require("mongoose");

const DbUrl = "mongodb://localhost:27017/SushiShop"

mongoose.connect(DbUrl, {useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log(`Connexion Succesful`))
.catch(err => console.log(`Error in DB connection ${err}`));