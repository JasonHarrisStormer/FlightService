import { useRef } from "react";
import { Center } from "../components/Formatting/StyledComponents";
import axios from 'axios';

export const CreatePassenger = () => {

    const passIDRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const flightsRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents page refresh on submit
        
        try{
            await axios.post('http://localhost:8086/passenger', 
                        {passengerId : passIDRef, firstName : firstNameRef, lastName : lastNameRef, flights : flightsRef})
        }catch(err){
            console.log('Something went wrong!!!');
        }
        passIDRef.current.value = null;
        firstNameRef.current.value = null;
        lastNameRef.current.value = null;
        flightsRef.current.value = null;
    }
    return (
        <Center>
            <form onSubmit={handleSubmit}>
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