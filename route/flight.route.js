const router = require('express').Router();
const { createFlight: createFlight, findMovieById: findFlightById, findAllMovies: findAllFlights } = require('../controllers/movie.controller');

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

router.get('/:depDate', async (req, res) => {
    try{
        const depDate = await findFlightByDepDate(req.params.depDate);
        res.json(depDate);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

router.get('/:arrDate', async (req, res) => {
    try{
        const arrDate = await findFlightArrDate(req.params.arrDate);
        res.json(arrDate);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

module.exports = router;