const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
    firstName: String,
    lastName: String,
    passId: String,
    info: [{
        occupation: String,
        depCity: String,
        arrCity: String
    }]
});

const Passenger = mongoose.model('Passenger', passengerSchema, 'Passengers');
module.exports = Passenger;