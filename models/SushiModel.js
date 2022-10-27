const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sushiSchema = Schema({
   sushiname: {
      type: String,
      required: true,
   },
   body: {
      type: String,
      required: true,
   },
   sushi_image: {
      type: String,
      required: false,
   },
   date: {
      type: Date,
      default: Date.now()
   }
})

module.exports = Sushi = mongoose.model("Sushi", sushiSchema);