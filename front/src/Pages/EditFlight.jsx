import { Center } from "../components/Formatting/StyledComponents";
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

export const EditFlight = () => {
    const [setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8086/flights')
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
    // const navigate = useNavigate();

    const editFlight = async (params) => {
        if(curPassRef.current.value <= maxPassRef.current.value){
            try{
                const res = await axios.get('http://localhost:8086/flights', 
                            {params:{flightNumber : flightIdRef.current.value,
                                depCity : depCityRef.current.value,
                                depDate : depDateRef.current.value,
                                depTime : depTimeRef.current.value,
                                arrCity : arrCityRef.current.value,
                                arrDate : arrDateRef.current.value,
                                arrTime : arrTimeRef.current.value,
                                curPass : curPassRef.current.value,
                                maxPass : maxPassRef.current.value}});
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
        }else{
            const prevCurPass = axios.get('http://localhost:8086/flights', {params:{flightIdRef}});

            alert(`Maximum Capacity is ${maxPassRef.current.value}, current passenger capacity is ${prevCurPass.curPass} and cannot accommodate ${curPassRef.current.value} more passengers!`)
        }
    }
    return(
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
                    <div class="container">
                        <input type="submit" value="Edit Flight" />
                    </div>
                </form>
           </div>
        </Center>
    );
}