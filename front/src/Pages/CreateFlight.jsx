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
    const curPassRef = useRef();
    const navigate = useNavigate();

    const clearForm = () => {
        flightIdRef.current.value=null; // clearing out text boxes on button click
        depCityRef.current.value=null;
        depDateRef.current.value=null;
        depTimeRef.current.value=null;
        arrCityRef.current.value=null;
        arrDateRef.current.value=null;
        arrTimeRef.current.value=null;
        curPassRef.current.value=null;
        maxPassRef.current.value=null;
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevents page refresh on submit
        let maxPassNow = maxPassRef.current.value;
        let curPassNow = curPassRef.current.value;
        const exceedPass = curPassNow - maxPassNow;
        
        if(exceedPass > 0){
            
            alert(`Maximum capacity is ${maxPassNow}. \nAdding ${curPassNow} will cause the flight to exceed capacity by ${exceedPass}! 
                    \nPlease re-create the flight with an acceptable number of passengers.`)
            clearForm(); // clearing out text boxes on button click
        }
        else
        {
            try
            {
                await axios.post('http://localhost:8086/flight', 
                            {flightNumber : flightIdRef.current.value, depCity : depCityRef.current.value, depTime : depTimeRef.current.value, depDate : depDateRef.current.value, arrCity : arrCityRef.current.value, arrTime : arrTimeRef.current.value, 
                                arrDate : arrDateRef.current.value, maxPass : maxPassRef.current.value, curPass : curPassRef.current.value});
                                navigate('../flights', {replace: true});
                        
            }
            catch(error)
            {
                if (error.response.status === 428)
                {
                    alert("The required inputs have not been entered correctly. \nor that flight number is already in use. \n Check your inputs, and please try again.");
                    console.log(error.response.data.message);
                }
                else{
                    console.log(error.response.data.message);
                }
            }
            finally
            {
                    clearForm();// clearing out text boxes on button click
            }
        }
            
    }
        

    return (
        <Center>
            <form onSubmit={handleSubmit} >
                <div className="CreateForm" >
                    <div className="container" >
                        <div>
                            <label htmlFor="flight" ><strong>&nbsp;  ---CREATE FLIGHT---</strong></label>
                            <div><input id="flight" placeholder="Enter Flight ID Number" ref={flightIdRef}/></div>
                        </div><p></p>
                    </div>
                    <div className="container">
                        <div>
                            
                            <label htmlFor="depCity" >Departure City: </label>
                            <div><input id="depCity" placeholder="Enter Departure City" ref={depCityRef}/></div>
                            
                            <label htmlFor="depTime" >Departure Time: </label>
                            <div><input id="depTime" placeholder="Enter Departure Time" ref={depTimeRef}/></div>
                            
                            <label htmlFor="depDate" >Departure Date: </label>
                            <div><input id="depDate" placeholder="Enter Departure Date" ref={depDateRef}/></div>
                        </div>
                        <div>
                            <label htmlFor="arrCity" >Arrival City: </label>
                            <div><input id="arrCity" placeholder="Enter Arrival City" ref={arrCityRef}/></div>
                            
                            <label htmlFor="arrTime" >Arrival Time: </label>
                            <div><input id="arrTime" placeholder="Enter Arrival Time" ref={arrTimeRef}/></div>
                            
                            <label htmlFor="arrDate" >Arrival Date: </label>
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
                        <input type="submit" value="Create Flight" />
                    </div>
                </div> 
            </form>    
        </Center>
    );
}