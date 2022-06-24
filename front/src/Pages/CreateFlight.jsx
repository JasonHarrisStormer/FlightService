import { useRef } from "react";
// import { Center } from "../components/Formatting/StyledComponents";
import axios from 'axios';
import '../components/Formatting/InputForm.css';
import { useNavigate } from "react-router-dom";
import { Center } from "../components/Formatting";

export const CreateFlight = () => {

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
    

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents page refresh on submit
        
        try{
            await axios.post('http://localhost:8086/flight', 
                        {flightNumber : flightIdRef.current.value, depCity : depCityRef.current.value, depTime : depTimeRef.current.value, depDate : depDateRef.current.value, arrCity : arrCityRef.current.value, arrTime : arrTimeRef.current.value, 
                            arrDate : arrDateRef.current.value, maxPass : maxPassRef.current.value, currPass : currPassRef.current.value});
                            navigate('../flights', {replace: true});
        }catch(error){
            if (error.message.indexOf("0") !=-1)
            {
                alert("This Flight Number has already been used!");
            }
            if(error.name === "mongoose:validatorError"){
                alert("The input required inputs have not been entered. Please try again.")
            }
            else{
            console.log(error);
            }
        }finally{
                flightIdRef.current.value=null; // clearing out text boxes on button click
                depCityRef.current.value=null;
                depDateRef.current.value=null;
                depTimeRef.current.value=null;
                arrCityRef.current.value=null;
                arrDateRef.current.value=null;
                arrTimeRef.current.value=null;
                currPassRef.current.value=null;
                maxPassRef.current.value=null;
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

                <label htmlFor="maxPass" >Maximum Passengers: </label>
                <div><input id="maxPass" placeholder="Maximum Passengers" ref={maxPassRef}/></div>
                
                <label htmlFor="currPass" >Passengers: </label>
                <div><input id="currPass" placeholder="Current Number of Passengers" ref={currPassRef}/></div>
                
                <input type="submit" value="Create Flight" />
                
            </form>
        
        </Center>

    );
}