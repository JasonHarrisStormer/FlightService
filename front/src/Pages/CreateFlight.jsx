import { useState, useRef } from "react";
import { useDispatch } from "react-redux"; // change the store, and useSelector is used to read the store
import { Center } from "../components/Formatting/StyledComponents";

export const CreateFlight = () => {

    const {flight, setFlightID} = useState();
    const flightIdRef = useRef();
    const maxPassRef = useRef();
    const depCityRef = useRef();
    const depTimeRef = useRef();
    const depDateRef = useRef();
    const arrCityRef = useRef();
    const arrTimeRef = useRef();
    const arrDateRef = useRef();
    
    const dispatcher = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents page refresh on submit
        
        dispatcher({type: 'CREATE_FLIGHT', payload: flightIdRef.current.value}); // sending the data to the store via dispatcher
        dispatcher({type: 'CREATE_FLIGHT', payload: maxPassRef.current.value});
        dispatcher({type: 'CREATE_FLIGHT', payload: depCityRef.current.value});
        dispatcher({type: 'CREATE_FLIGHT', payload: depDateRef.current.value});
        dispatcher({type: 'CREATE_FLIGHT', payload: depTimeRef.current.value});
        dispatcher({type: 'CREATE_FLIGHT', payload: arrCityRef.current.value});
        dispatcher({type: 'CREATE_FLIGHT', payload: arrDateRef.current.value});
        dispatcher({type: 'CREATE_FLIGHT', payload: arrTimeRef.current.value});

        flightIdRef.current.value=null; // clearing out text boxes on button click
        maxPassRef.current.value=null;
        depCityRef.current.value=null;
        depDateRef.current.value=null;
        depTimeRef.current.value=null;
        arrCityRef.current.value=null;
        arrDateRef.current.value=null;
        arrTimeRef.current.value=null;
    }
    return (
        <Center>
            <form>
                <div><label htmlFor="flight">Flight ID Number: </label>
                <input id="flight" placeholder="Enter Flight ID Number" ref={flightIdRef}/></div><div>
                <br />
                <label htmlFor="maxPass" >Maximum Passenger Capacity: </label>
                <input id="maxPass" placeholder="Maximum Passenger Capacity" ref={maxPassRef}/></div><div>
                <br />
                <label htmlFor="depCity">Departure City: </label>
                <input id="depCity" placeholder="Enter Departure City" ref={depCityRef}/></div><div>
                <br />
                <label htmlFor="depTime">Departure Time: </label>
                <input id="depTime" placeholder="Enter Departure Time" ref={depTimeRef}/></div><div>
                <br />
                <label htmlFor="depDate">Departure Date: </label>
                <input id="depDate" placeholder="Enter Departure Date" ref={depDateRef}/></div><div>
                <br />
                <label htmlFor="arrCity">Arrival City: </label>
                <input id="arrCity" placeholder="Enter Arrival City" ref={arrCityRef}/></div><div>
                <br />
                <label htmlFor="arrTime">Arrival Time: </label>
                <input id="arrTime" placeholder="Enter Arrival Time" ref={arrTimeRef}/></div><div>
                <br />
                <label htmlFor="arrDate">Arrival Date: </label>
                <input id="arrDate" placeholder="Enter Arrival Date" ref={arrDateRef}/></div><div>
                <br />
                <button onClick={handleSubmit}>Create Flight </button></div>
            </form>
        
        </Center>

    );
}