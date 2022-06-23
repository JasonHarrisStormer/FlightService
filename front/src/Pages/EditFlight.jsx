import { Center } from "../components/Formatting/StyledComponents";
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const EditFlight = () => {
    const [flight, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8086/flights')
        .then(res => setFlights(res.data));
    });
    const flightIdRef = useRef();
    const maxPassRef = useRef();
    const depCityRef = useRef();
    const depTimeRef = useRef();
    const depDateRef = useRef();
    const arrCityRef = useRef();
    const arrTimeRef = useRef();
    const arrDateRef = useRef();
    const currPassRef = useRef();
    const navigate = useNavigate();
    

    const editFlight = async (flightId) => {
        try{
            await axios.post('http://localhost:8086/flight', 
                        {flightNumber : flightIdRef.current.value, depCity : depCityRef.current.value, depTime : depTimeRef.current.value, depDate : depDateRef.current.value, arrCity : arrCityRef.current.value, arrTime : arrTimeRef.current.value, 
                            arrDate : arrDateRef.current.value, currPass: currPassRef.current.value, maxPass : maxPassRef.current.value});
                            navigate('../flights', {replace: true});
        }catch(err){
            console.log('Something went wrong!!!');
        }

        flightIdRef.current.value=null; // clearing out text boxes on button click
        maxPassRef.current.value=null;
        depCityRef.current.value=null;
        depDateRef.current.value=null;
        depTimeRef.current.value=null;
        arrCityRef.current.value=null;
        arrDateRef.current.value=null;
        arrTimeRef.current.value=null;
    }
    return(
        <Center>
            {/* Transforming the flight array into an array of JSX elements for display and formatting */}
           <div>
           return(
                    <form className="FlightForm" onSubmit= {(event) => { event.preventDefault(); editFlight(flight.flightNumber)}}>
                        <div key={flight._id} >
                            
                            <div><strong>Flight ID: </strong>{flight.flightNumber}</div> 
                            <div><strong>Departure City: </strong>{flight.depCity}</div>
                            <div><strong>Departure Time: </strong>{flight.depTime} <strong>Departure Date: </strong>{flight.depDate}</div>
                            <div><strong>Arrival City: </strong>{flight.arrCity}</div>
                            <div><strong>Arrival Time: </strong>{flight.arrTime}<strong> Arrival Date: </strong>{flight.arrDate}</div>
                            <div><strong>Number of Passengers: </strong>{flight.currPass}</div>
                            <div><strong>Maximum Number of Passengers: </strong>{flight.maxPass}</div>
                            <input type="submit" value="Edit Flight" />
                        </div>
                    </form>
                )
           </div>
        </Center>
    );
}