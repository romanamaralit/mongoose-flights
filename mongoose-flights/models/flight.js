const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: {
    type: Number,
    required: true},
  departs: Date,
},
{
    timestamps: true,
  }
  );

module.exports=mongoose.model('Flight', flightSchema)