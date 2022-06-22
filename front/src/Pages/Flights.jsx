import { Center } from "../components/Formatting/StyledComponents";
import {useEffect, useState} from 'react';
import axios from 'axios';


export const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8086/flights')
        .then(res => setFlights(res.data));
    });

    return(
        <Center>
            Welcome to Flight Services!
            {/* Transforming the flights araay into an array of JSX elements for display and formatting */}
           <div>
            {flights.map((flight, index) => {
                return(
                    <div key={flight._id}>
                        <div><strong>{flight.depCity}</strong></div>
                        <div><strong>{flight.depTime} {flight.depDate}</strong></div>
                        <div><strong>{flight.arrCity}</strong></div>
                        <div><strong>{flight.arrTime} {flight.arrDate}</strong></div>
                        <ul>
                            {flight.currPass.map (passenger => {
                                return(
                                    <li key={passenger._id}>
                                        {passenger.firstName}{passenger.lastName}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )
            })}
           </div>
        </Center>
    );
}