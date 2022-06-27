import { useRef, useState, useEffect } from "react";
import { Center } from "../components/Formatting/StyledComponents";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const SearchFlights = () => {
    const [flight, setFlights] = useState();
    const flightIdRef = useRef();
    const navigate = useNavigate();

    const deleteFlight = async (flightId) => { // deleting the flight on submit
        try{
            
            await axios.delete(`http://localhost:8086/flight/${flightId}`);
            navigate('./', {replace:true});
            
        }catch(err){
            console.log(err);
        }
    }
    
    const searchFlights = async (params) => {
            
            
            try{
                const res = await axios.get(`http://localhost:8086/flight/${flightIdRef.current.value}`)
                setFlights(res.data);
                console.log(res.data);
            }catch(err){
                setFlights(); // remove response form when not found
                alert(err.response.data.message);
            }finally{
                flightIdRef.current.value=null; // clearing out text boxes on button click
            }
    }
    return (
        <>
        <Center>
            <form onSubmit= {(event) => { event.preventDefault(); searchFlights({
                    flightNumber : flightIdRef.current.value})}}>
                <div className="container">
                    <div>
                        <label htmlFor="flight">Flight ID Number: </label>
                        <div><input id="flight" placeholder="Enter Flight ID Number" ref={flightIdRef}/></div>
                    </div><p></p>
                </div>
                
                <div className="container">
                    <input type="submit" value="Search Flight" />
                </div>
            </form>
        </Center>
            <Center>
            <div class="container">
                {/* Transforming the flights araay into an array of JSX elements for display and formatting */}
                    {flight && <form className="FlightForm" onSubmit= {(event) => { event.preventDefault(); deleteFlight(flight._id)}}>
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
                    </form>}
            </div>    
            
            
            </Center>
        </>
    );
}