const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // One and done so I don't need the value from require

const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint

// use() function is used to have the app/router use a piece of middleware

// Custom middleware

// This binds a router object to the url /movies
// Any HTTP request starting with /movies will come here
const flightRouter =  require('./route/flight.route.js');

app.use('/flight', flightRouter);
app.use('/depDate', require('./route/depDate.route'));
app.use('/arrDate', require('./route/arrDate.route'));

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        mongoose.connect(process.env.MONGO_URI2)
        .then(() => {
            console.log('Successfully connected to backup MongoDB! Please verify status of primary DB before pushing posts!')
        })
        .catch (err => {
            console.error(err + '\nNo Database connections are able to be established.');
            process.exit(1);
        })
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});