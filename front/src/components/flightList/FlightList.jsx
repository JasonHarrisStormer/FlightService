import { useEffect, useState } from 'react';
import axios from 'axios';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all movies
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <div>
            {/* Transform the movies array into an array of JSX elements */}
            {flights.map((flight, index) => {
                // For our keys, we should use some unique property for the key value
                // Using index is a last resort if you have nothing else to use
                // Unique ids should be used ONLY if the id was created at time of data creation (It won't change)
                return (
                    <div key={flight._id}>
                        <div><strong>{flight.depCity}</strong></div>
                        <div><strong>{flight.depTime}</strong></div>
                        <div><strong>{flight.depDate}</strong></div>
                        <div><strong>{flight.arrCity}</strong></div>
                        <div><strong>{flight.arrTime}</strong></div>
                        <div><strong>{flight.arrDate}</strong></div>
                        <div><strong>{flight.maxPass}</strong></div>
                        <div>Total Passengers: {flight.currPass}</div>
                        <ul>
                            {flight.curPass.map(passenger => {
                                return (
                                    <li key={passenger._id}>
                                        {passenger.firstName} {passenger.lastName}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}