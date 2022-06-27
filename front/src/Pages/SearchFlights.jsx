import { useRef } from "react";
import { Center } from "../components/Formatting/StyledComponents";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";


export const SearchFlights = () => {

    const flightIdRef = useRef();
    const depCityRef = useRef();
    const depTimeRef = useRef();
    const depDateRef = useRef();
    const arrCityRef = useRef();
    const arrTimeRef = useRef();
    const arrDateRef = useRef();
    const curPassRef = useRef();
    const maxPassRef = useRef();
    // const navigate = useNavigate();

    const searchFlight = async (flightIdRef, event) => {
        event.preventDefault(); // prevents page refresh on submit
        
        try{
            const res = await axios.get('http://localhost:8086/searchresults', 
                        {params:{flightNumber : flightIdRef.current.value}});
            console.log(res);
        }catch(err){
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
    return (
        <Center>
            <form onSubmit= {(event) => { event.preventDefault(); searchFlight(flightIdRef)}}>
            <div class="container">
                    <div>
                        <label htmlFor="flight">Flight ID Number: </label>
                        <div><input id="flight" placeholder="Enter Flight ID Number" ref={flightIdRef}/></div>
                        
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

                        <label htmlFor="maxPass" >Maximum Passengers: </label>
                        <div><input id="maxPass" placeholder="Maximum Passengers" ref={maxPassRef}/></div>
                    </div>
                </div>
                <div class="container">
                    <label htmlFor="currPass" >Passengers: </label>
                    <div><input id="currPass" placeholder="Current Number of Passengers" ref={curPassRef}/></div>
                </div>
                <div class="container">
                    <input type="submit" value="Search Flight" />
                </div>
            </form>
        
        </Center>

    );
}