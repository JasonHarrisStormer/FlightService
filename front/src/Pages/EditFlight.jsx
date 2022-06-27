import { Center } from "../components/Formatting/StyledComponents";
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const EditFlight = () => {
    const [flight, setFlights] = useState();

    useEffect(() => {
        axios.get('http://localhost:8086/flight')
        .then(res => setFlights(res.data));
    });
    const flightIdRef = useRef();
    const depCityRef = useRef();
    const depTimeRef = useRef();
    const depDateRef = useRef();
    const arrCityRef = useRef();
    const arrTimeRef = useRef();
    const arrDateRef = useRef();
    const curPassRef = useRef();
    const maxPassRef = useRef();
    const navigate = useNavigate();
    

    const deleteFlight = async (flightId) => { // deleting the flight on submit
        try{
            await axios.delete(`http://localhost:8086/flight/${flightId}`);
            navigate('./', {replace:true});
            
        }catch(err){
            setFlights();
            console.log(err);
        }
    }

    const editFlight = async (params) => {
        
            try{
                const res = await axios.put('http://localhost:8086/flight', 
                            {flightNumber : flightIdRef.current.value,
                                depCity : depCityRef.current.value,
                                depDate : depDateRef.current.value,
                                depTime : depTimeRef.current.value,
                                arrCity : arrCityRef.current.value,
                                arrDate : arrDateRef.current.value,
                                arrTime : arrTimeRef.current.value,
                                curPass : curPassRef.current.value,
                                maxPass : maxPassRef.current.value});
                console.log(res.data);
                setFlights(res.data);
            }catch(err){
                setFlights();
                console.log('Something went wrong!!!' + err);
            }finally{
                flightIdRef.current.value=null; // clearing out text boxes on button click
                depCityRef.current.value=null;
                depDateRef.current.value=null;
                depTimeRef.current.value=null;
                arrCityRef.current.value=null;
                arrDateRef.current.value=null;
                arrTimeRef.current.value=null;
                curPassRef.current.value=null;
                maxPassRef.current.value=null;
            }
    }
    return(
        <>
        <Center>
            {/* Transforming the flight array into an array of JSX elements for display and formatting */}
           <div>
                <form onSubmit= {(event) => { event.preventDefault(); editFlight({
                    flightNumber : flightIdRef.current.value,
                    depCity : depCityRef.current.value,
                    depDate : depDateRef.current.value,
                    depTime : depTimeRef.current.value,
                    arrCity : arrCityRef.current.value,
                    arrDate : arrDateRef.current.value,
                    arrTime : arrTimeRef.current.value,
                    curPass : curPassRef.current.value,
                    maxPass : maxPassRef.current.value})}}>
                    <div className="container">
                    <div>
                        <label htmlFor="flight">Flight ID Number: </label>
                        <div><input id="flight" placeholder="Enter Flight ID Number" ref={flightIdRef}/></div>
                    </div><p></p>
                </div>
                <div className="container">
                    <div>
                        
                        <label htmlFor="depCity">Departure City: </label>
                        <div><input id="depCity" placeholder="Enter Departure City" ref={depCityRef}/></div>
                        
                        <label htmlFor="depTime">Departure Time: </label>
                        <div><input id="depTime" placeholder="Enter Departure Time" ref={depTimeRef}/></div>
                        
                        <label htmlFor="depDate">Departure Date: </label>
                        <div><input id="depDate" placeholder="Enter Departure Date" ref={depDateRef}/></div>
                    </div>
                    <div>
                        <label htmlFor="arrCity">Arrival City: </label>
                        <div><input id="arrCity" placeholder="Enter Arrival City" ref={arrCityRef}/></div>
                        
                        <label htmlFor="arrTime">Arrival Time: </label>
                        <div><input id="arrTime" placeholder="Enter Arrival Time" ref={arrTimeRef}/></div>
                        
                        <label htmlFor="arrDate">Arrival Date: </label>
                        <div><input id="arrDate" placeholder="Enter Arrival Date" ref={arrDateRef}/></div>
                    </div>
                </div>
                <div className="container">
                    <label htmlFor="maxPass" >Maximum Passengers: </label>
                    <div><input id="maxPass" placeholder="Maximum Passengers" ref={maxPassRef}/></div>
                </div>
                <div className="container">
                    <label htmlFor="currPass" >Passengers: </label>
                    <div><input id="currPass" placeholder="Current Number of Passengers" ref={curPassRef}/></div>
                </div>
                    <div className="container">
                        <input type="submit" value="Edit Flight" />
                    </div>
                </form>
           </div>
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