const router = require('express').Router();
const { createFlight, findFlightById, findAllFlights } = require('../controllers/Flight.controller');

// A router functions the same as your standard app for the most part, but it's a subsection of your app

router.get('/', async (req, res) => {
    const depDate = await findAllFlights();
    res.json(depDate);
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
        const movie = await findFlightById(req.params.id);
        res.json(movie);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.get('/:arrTime', async (req, res) => {
    try{
        const depDate = await findFlightByDepDate(req.params.depDate);
        res.json(depDate);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.get('/:depTime', async (req, res) => {
    try{
        const depTime = await findFlightDepTime(req.params.depTime);
        res.json(depTime);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.get('/:depCity', async (req, res) => {
    try{
        const depCity = await findFlightDepCity(req.params.depCity);
        res.json(depCity);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});
module.exports = router;