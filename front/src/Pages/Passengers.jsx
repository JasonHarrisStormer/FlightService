import { Center } from "../components/Formatting/StyledComponents";
import {useState, useEffect} from 'react';
import axios from 'axios';


export const Passengers = () => {
    const [passenger, setPassengers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8086/passengers')
        .then(res => setPassengers(res.data));
    });

    return(
        <Center>
            {/* Transforming the passenger array into an array of JSX elements for display and formatting */}
           <div>
            {passenger.map((passenger, index) => {
                return(
                    <div key={passenger._id}>
                        <div><strong>{passenger.firstName}</strong></div>
                        <div><strong>{passenger.lastName} </strong></div>
                        <ul>
                            {passenger.flight.map (flight => {
                                return(
                                    <li key={flight._id}>
                                        {flight.depCity}{flight.depDate}
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