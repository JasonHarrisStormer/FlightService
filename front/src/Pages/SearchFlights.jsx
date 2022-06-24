import { useRef } from "react";
import { Center } from "../components/Formatting/StyledComponents";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const SearchFlights = () => {

    const flightIdRef = useRef();
    const depCityRef = useRef();
    const depTimeRef = useRef();
    const depDateRef = useRef();
    const arrCityRef = useRef();
    const arrTimeRef = useRef();
    const arrDateRef = useRef();
    const currPassRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents page refresh on submit
        
        try{
            await axios.post('http://localhost:8086/searchflights', 
                        {flightNumber : flightIdRef.current.value, depCity : depCityRef.current.value, depTime : depTimeRef.current.value, depDate : depDateRef.current.value, 
                            arrCity : arrCityRef.current.value, arrTime : arrTimeRef.current.value, arrDate : arrDateRef.current.value, currPass: currPassRef.current.value});
            navigate('../searchresults', {replace:true});
        }catch(err){
            console.log('Something went wrong!!!');
        }finally{
            flightIdRef.current.value=null; // clearing out text boxes on button click
            depCityRef.current.value=null;
            depDateRef.current.value=null;
            depTimeRef.current.value=null;
            arrCityRef.current.value=null;
            arrDateRef.current.value=null;
            arrTimeRef.current.value=null;
        }
    }
    return (
        <Center>
            <form onSubmit={handleSubmit}>
            <label htmlFor="flight">Flight ID Number: </label>
                <div><input id="flight" placeholder="Enter Flight ID Number" ref={flightIdRef}/></div>
                
                <label htmlFor="depCity">Departure City: </label>
                <div><input id="depCity" placeholder="Enter Departure City" ref={depCityRef}/></div>
                
                <label htmlFor="depTime">Departure Time: </label>
                <div><input id="depTime" placeholder="Enter Departure Time" ref={depTimeRef}/></div>
                
                <label htmlFor="depDate">Departure Date: </label>
                <div><input id="depDate" placeholder="Enter Departure Date" ref={depDateRef}/></div>
                
                <label htmlFor="arrCity">Arrival City: </label>
                <div><input id="arrCity" placeholder="Enter Arrival City" ref={arrCityRef}/></div>
                
                <label htmlFor="arrTime">Arrival Time: </label>
                <div><input id="arrTime" placeholder="Enter Arrival Time" ref={arrTimeRef}/></div>
                
                <label htmlFor="arrDate">Arrival Date: </label>
                <div><input id="arrDate" placeholder="Enter Arrival Date" ref={arrDateRef}/></div>

                <label htmlFor="currPass">Passengers: </label>
                <div><input id="currPass" placeholder="Current Number of Passengers" ref={currPassRef}/></div>
                
                <div><button onClick={handleSubmit}>Search Flights</button></div>
            </form>
        
        </Center>

    );
}