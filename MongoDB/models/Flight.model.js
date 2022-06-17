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
    maxPass: 500,
    currPass: [{ 
        firstName: "John",
        lastName: "Cena",
        passId: 'JOHNCENA'
    }],
    atLimit: "boolean" // {this: currPass.length() > passCap}
};

// Create the Flight schema
const flightSchema = new Schema({
    flightNumber: Number,
    depCity: String,
    depTime: Number,
    depDate: Date,
    arrCity: String,
    arrTime: Number,
    arrDate: Date,
    maxPass: {  // setting passenger limits
        type: Number,
        // Tuple with first element being the min value, second being the error message
        min: [0, 'Flight cannot have a less than 0 passengers, how do you make a -1 person?'],
        max: [500, 'Flight cannot have a more than 100 passengers, there are not enough seats!']
        // By default, these fields are NOT required
    },
    currPass: [{ // storing passenger lists
        // This is the data being stored on the lead actors
        firstName: String,
        lastName: String,
        passId: {
            type: Schema.Types.ObjectId, // This symbolizes a MongoDB _id
            ref: 'Passenger' // Refer to another Mongoose model
        }
    }],
    atLimit: Boolean // is the passenger cap reached compared to the indexces of the current passenger array?

});

//                        Model Name | Schema Object | Collection Name in Atlas
const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight; // require('Flight.model.js') will return this Flight class