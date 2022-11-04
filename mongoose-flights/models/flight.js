const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, default: "n/a", enum: ['American','Southwest','United']},
  flightNo: {type: Number, required: true, default: "n/a", min: 10, max: 9999},
  airport: {type: String, default: "DEN", enum: ['AUS','DFW','DEN','LAX','SAN']},
  departs: {type: Date, required: true, default: new Date(new Date().setFullYear(new Date().getFullYear()+1))},
},
{
    timestamps: true,
  }
  );

module.exports=mongoose.model('Flight', flightSchema)

