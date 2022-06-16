const Flight = require('../models/Flight.model');
const { addFlightToPassenger } = require('./Passenger.controller');

const createFlight = async ({depCity, depTime, depDate, arrCity, arrTime, arrDate, flightId, curPass, maxPass}) => {
    try {
        const flight = new Flight({
            depCity, 
            depTime, 
            depDate, 
            arrCity, 
            arrTime, 
            arrDate, 
            flightId, 
            curPass, 
            maxPass
        }); // This alone does not save to the database, this just simply prepares for the database
        await flight.save(); // Saves the newly created movie to the database

        return flight._id; // Return the id of the newly created. Could also return the entire object
    } 
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const findFlightById = async id => {
    try {
        // If no movie is found, this does NOT return a rejected promise. Instead null is returned
        const flight = await Flight.findById(id);
        if (flight == null) {
            throw `No movie with the id of ${id} found.`;
        }
        return flight; // Movie was found and we return it
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}

const findAllFlights = async (limit=0) => {
    const movies = await Flight.find(); // GET all movies
    return movies;
}

module.exports = { createFlight, findFlightById, findAllFlights };