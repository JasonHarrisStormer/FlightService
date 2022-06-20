import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; // change the store, and useSelector is used to read the store
import { Center } from "../components/Formatting/StyledComponents";

export const CreatePassenger = () => {

    const {passenger, setPassID} = useState('');
    const passIDRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const flightsRef = useRef();
    
    const dispatcher = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents page refresh on submit
        // flightIdRef.current.value
        dispatcher({type:'CREATE_PASSENGER', payload:passIDRef.current.value});
        dispatcher({type:'CREATE_PASSENGER', payload:firstNameRef.current.value});
        dispatcher({type:'CREATE_PASSENGER', payload:lastNameRef.current.value});
        dispatcher({type:'CREATE_PASSENGER', payload:flightsRef.current.value});

        passIDRef.current.value = null;
        firstNameRef.current.value = null;
        lastNameRef.current.value = null;
        flightsRef.current.value = null;
    }
    return (
        <Center>
            <form>
                <div><label htmlFor="passID">Flight ID Number: </label>
                <input id="passID" placeholder="Enter Passenger ID Number" ref={passIDRef}/></div><div>
                <br />
                <label htmlFor="firstname" >First Name: </label>
                <input id="firstName" placeholder="First Name" ref={firstNameRef}/></div><div>
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input id="lastName" placeholder="Last Name" ref={lastNameRef}/></div><div>
                <br />
                <label htmlFor="flights">Add Flights to Passenger: </label>
                <input id="flights" placeholder="Flight Numbers" ref={flightsRef}/></div><div>
                <br />
                <button onClick={handleSubmit}>Create Passenger</button></div>
            </form>
        
        </Center>

    );
}