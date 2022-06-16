const router = require('express').Router();
const { createFlight: createFlight, findMovieById: findFlightById, findAllMovies: findAllFlights } = require('../controllers/Flight.controller');

// A router functions the same as your standard app for the most part, but it's a subsection of your app

router.get('/', async (req, res) => {
    const movies = await findAllFlights();
    res.json(movies);
});

router.post('/', async (req, res) => {
    try{
        const movieId = await createFlight(req.body);
        res.status(201).json({_id: movieId});
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
        const arrTime = await findFlightByArrTime(req.params.arrTime);
        res.json(arrTime);
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

router.get('/:arrCity', async (req, res) => {
    try{
        const arrCity = await findFlightArrCity(req.params.arrCity);
        res.json(arrCity);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
    
});

module.exports = router;