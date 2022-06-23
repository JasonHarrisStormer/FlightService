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
        .then(res => setFlights(res.data));
    });

    const deleteFlight = async (flightId) => {
            try{
                console.log('Your Problem is not in Flights.jsx')
                await axios.delete(`http://localhost:8086/flight/${flightId}`);
                navigate('./', {replace:true});
                
            }catch(err){
                console.log(err);
            }
        }

    return(
        <Center>
            
            {/* Transforming the flights araay into an array of JSX elements for display and formatting */}
           <div>
            {flight.map((flight, index) => {
                return(
                    <form className="FlightForm" onSubmit= {(event) => { event.preventDefault(); deleteFlight(flight._id)}}>
                        <div key={flight._id} >
                            
                            <div><strong>Flight ID: </strong>{flight.flightNumber}</div> 
                            <div><strong>Departure City: </strong>{flight.depCity}</div>
                            <div><strong>Departure Time: </strong>{flight.depTime} <strong>Departure Date: </strong>{flight.depDate}</div>
                            <div><strong>Arrival City: </strong>{flight.arrCity}</div>
                            <div><strong>Arrival Time: </strong>{flight.arrTime}<strong> Arrival Date: </strong>{flight.arrDate}</div>
                            <div><strong>Number of Passengers: </strong>{flight.currPass}</div>
                            <div><strong>Maximum Number of Passengers: </strong>{flight.maxPass}</div>
                            <input type="submit" value="Delete Flight" />
                        </div>
                    </form>
                )
            })}
           </div>
        </Center>
    );
}