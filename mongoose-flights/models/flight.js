const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: String,
  departs: Date,
},
{
    timestamps: true,
  }
  );

module.exports=mongoose.model('Flight', flightSchema)