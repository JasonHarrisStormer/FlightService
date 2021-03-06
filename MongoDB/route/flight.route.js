
const router = require('express').Router();
const { createFlight, findFlightById, findAllFlights, updateFlight, deleteFlight } = require('../controllers/Flight.controller');

// A router functions the same as your standard app for the most part, but it's a subsection of your app

router.get('/', async (req, res) => {
    const movies = await findAllFlights();
    res.json(movies);
});

router.post('/', async (req, res) => {
    try{
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    }catch (err){
        res.status(err?.status || 500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try{
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.put('/', async (req, res) => {
    try{
        const updatedFlight = await updateFlight(req.body);
        res.status(201).json(updatedFlight);
    }catch (err){
        res.status(err?.status || 500).json(err);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const flight = await deleteFlight(req.params.id);
        res.json(flight);
    }catch (err){
        res.status(err?.status || 400).json(err);
    }
})

module.exports = router;