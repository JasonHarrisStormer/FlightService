import { Center } from "../components/Formatting/StyledComponents";
import {useEffect, useState, useRef} from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Flights = () => {
    const [flight, setFlights] = useState([]);
    const navigate = useNavigate();
    const flightIdRef = useRef();

    useEffect(() => {
        axios.get('http://localhost:8086/flight')
        .then(res => setFlights(res.data));
    });

    const deleteFlight = async (event) => {
            event.preventDefault(); // prevents page refresh on submit
            
            try{
                await axios.delete('http://localhost:8086/flight', {data : {flightIdRef : flight._id}});
                navigate('./flights', {replace:true});
                //res.data.json;
            }catch(err){
                console.log('Something went wrong!!!');
            }
        }

    return(
        <Center>
            
            {/* Transforming the flights araay into an array of JSX elements for display and formatting */}
           <div>
            {flight.map((flight, index) => {
                return(
                    <form className="MyForm" onSubmit={deleteFlight}>
                        <div key={flight._id} >
                            
                            <div><strong>Flight ID: </strong>{flight.flightNumber}</div> 
                            <div><strong>Departure City: </strong>{flight.depCity}</div>
                            <div><strong>Departure Time: </strong>{flight.depTime} <strong>Departure Date: </strong>{flight.depDate}</div>
                            <div><strong>Arrival City: </strong>{flight.arrCity}</div>
                            <div><strong>Arrival Time: </strong>{flight.arrTime}<strong> Arrival Date: </strong>{flight.arrDate}</div>
                            <div><strong>Number of Passengers: </strong>{flight.currPass}</div>
                            <div><strong>Maximum Number of Passngers: </strong>{flight.maxPass}</div>
                            <input type="submit" value="Delete Flight" />
                        </div>
                    </form>
                )
            })}
           </div>
        </Center>
    );
}