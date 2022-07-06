const Flight = require('../models/Flight.model');

const createFlight = async ({flightNumber, depCity, depTime, depDate, arrCity, arrTime, arrDate, maxPass, curPass}) => {
    try {
        const flight = new Flight({
            flightNumber,
            depCity, 
            depTime, 
            depDate, 
            arrCity, 
            arrTime, 
            arrDate,
            maxPass,  
            curPass 
            
        }); // This alone does not save to the database, this just simply prepares for the database
        await flight.save(); // Saves the newly created flight to the database

        return flight._id; // Return the db id of the newly created flight. Could also return the entire object
    } 
    // This catch will occur if any of the values are not up to standard
    catch (err) {
        console.error(err);
        throw { status: 428, message: err };
    }
}
const updateFlight = async (updatedFlight) =>{
    try{
        const uFlight = await Flight.findOneAndUpdate({flightNumber : updatedFlight.flightNumber}, updatedFlight, {new : true});
        if (uFlight == null){ // if no flight found, advise to create one
            throw `The flight id ${ id } does not exist, please create it first!`
        }
        return uFlight; // return results
    }catch (err){
        console.error(err);
        throw { status: 404, message: err };
    }
}

const findFlightById = async id => {
    try {
        // If no flight is found, this does NOT return a rejected promise. Instead null is returned
        const flight = await Flight.findOne({flightNumber:id});
        if (flight == null) {
            throw `No flight with the id of ${id} found.`;
        }
        return flight; // flight was found and we return it
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}

const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); // GET all flights
    return flights;
}
const deleteFlight = async id => {
    const flights = await Flight.deleteOne({_id:id});
    return flights;
}

module.exports = { createFlight, findFlightById, findAllFlights, updateFlight, deleteFlight };