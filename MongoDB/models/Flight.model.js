// Mongoose allows us to provide a schema for our documents
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sample Flight Object
const starFlight = {
    flightNumber: 001,
    depCity: "Charlotte",
    depTime: 1100,
    depDate: 07/08/2022,
    arrCity: "New York City",
    arrTime: 1300,
    arrDate: 07/08/2022,
    maxPass: 10,
    currPass: 0
};

// Create the Flight schema
const flightSchema = new Schema({
    flightNumber: {
        type: Number,
        unique: [true, 'That flight has already been created.'],
        required: [true, 'A flight number is required.'],
    },
    depCity: {
        type: String,
        required: [true, 'The departure city is required.'],
    },
    depTime: Number,
    depDate: String,
    arrCity: {
        type: String,
        required: [true, 'The arrival city is required.'],
    },
    arrTime: Number,
    arrDate: String,
    maxPass: Number,
    currPass: {
        type: Number,
        min: [0, 'Flight cannot have a less than 0 passengers, how do you make a -1 person?'],
        max: [10, 'Flight cannot have a more than 10 passengers, there are not enough seats!']
    }
});

//                        Model Name | Schema Object | Collection Name in Atlas
const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight; // require('Flight.model.js') will return this Flight class