const Passenger = require('../models/Passenger.model');

const createPassenger = async ({firstName, lastName, flights}) => {
    try {
        const passenger = new Passenger({
            firstName,
            lastName,
            flights
        });
        await passenger.save();
        return passenger._id;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const addFlightToPassenger = async (_id, { depCity, arrCity, depDate, arrDate,  _id: flightId }) => {
    try {
        // Pushes onto the array for the field 'flights', a new object containing depCity, depTime, depDate, arrCity, arrTime, arrDate, flightId, curPass, maxPass
        await Passenger.findByIdAndUpdate(_id, { $push: { flights: { depCity, depTime, depDate, arrCity, arrTime, arrDate, _id: flightId, curPass, maxPass } } });
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

module.exports = { createActor: createPassenger, addMovieToActor: addFlightToPassenger };