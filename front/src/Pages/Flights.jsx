import { Center } from "../components/Formatting/StyledComponents";
import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Flights = () => {
    const [flight, setFlights] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8086/flight')
        .then(res => setFlights(res.data)); // getting the info to display all flights
    });

    const deleteFlight = async (flightId) => { // deleting the flight on submit of the 'delete flight' button
            try{
                
                await axios.delete(`http://localhost:8086/flight/${flightId}`);
                navigate('./', {replace:true});
                
            }catch(err){
                console.log(err);
            }
        }

    return(
        <><Center>
            <div className = "container"><h2> ALL FLIGHTS CURRENTLY IN DATABASE</h2></div>
        </Center>
        <Center>
            <div className="container">
            
            {/* Transforming the flights araay into an array of JSX elements for display and formatting */}
            {flight
                .sort((a, b) => b.count_filtered - a.count_filtered)
                .map((flight, index) => {
                return(
                    <form className="FlightForm" onSubmit= {(event) => { event.preventDefault(); deleteFlight(flight._id)}}>
                        <div key={flight._id}> {/* creating the display for multiple flights in a flex grid with backgrounds and boarders */ }
                            
                            <div><strong>Flight ID: </strong>{flight.flightNumber}</div> 
                            <div><strong>Departure City: </strong>{flight.depCity}</div>
                            <div><strong>Departure Time: </strong>{flight.depTime}</div>
                            <div><strong>Departure Date: </strong>{flight.depDate}</div>
                            <div><strong>Arrival City: </strong>{flight.arrCity}</div>
                            <div><strong>Arrival Time: </strong>{flight.arrTime}</div>
                            <div><strong>Arrival Date: </strong>{flight.arrDate}</div>
                            <div><strong>Passengers: </strong>{flight.curPass}</div>
                            <div><strong>Max Seats: </strong>{flight.maxPass}</div>
                            <input type="submit" value="Delete Flight" />
                        </div>
                    </form>
                )
            })}
            
            </div>
        </Center>
        </>
    );
}