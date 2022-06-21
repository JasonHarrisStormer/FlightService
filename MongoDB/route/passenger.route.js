const router = require('express').Router();
const { createPassenger, addFlightToPassenger, findFlightByPassenger, findPassengerById } = require('../controllers/Passenger.controller');

// A router functions the same as your standard app for the most part, but it's a subsection of your app

router.get('/', async (req, res) => {
    const passenger = await findAllPassengers();
    res.json(passenger);
});

router.post('/', async (req, res) => {
    try{
        const passenger = await createPassenger(req.body);
        res.status(201).json({_id: passenger});
    }catch (err){
        res.status(err?.status || 500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try{
        const passengerId = await findPassengerById(req.params.id);
        res.json(passengerId);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.get('/:flights', async (req, res) => {
    try{
        const flights = await findFlightByPassenger(req.params.flights);
        res.json(flights);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});


module.exports = router;