const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, default: "n/a", enum: ['American','Southwest','United']},
  flightNo: {type: Number, required: true, default: "n/a", min: 10, max: 9999},
  airport: {type: String, default: "DEN", enum: ['AUS','DFW','DEN','LAX','SAN']},
  departs: {type: Date},
},
{
    timestamps: true,
  }
  );

module.exports=mongoose.model('Flight', flightSchema)