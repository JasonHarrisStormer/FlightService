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

    const editFlight = async (params) => {
        let maxPassNow = maxPassRef.current.value; // making useRef variables into let variables to be used for if checks and declarations
        let curPassNow = curPassRef.current.value;
        const exceedPass = curPassNow - maxPassNow;
        let flightIdNow = flightIdRef.current.value;
        let arrCityNow = arrCityRef.current.value;
        let depCityNow = depCityRef.current.value;

        if(exceedPass > 0){
            
            alert(`Maximum capacity is ${maxPassNow}. \nAdding ${curPassNow} will cause the flight to exceed capacity by ${exceedPass}! 
                    \nPlease re-create the flight with an acceptable number of passengers.`)
            clearForm(); // clearing out text boxes on button click
            setFlights();
        }
        else
        {
            if(flightIdNow !== "" && arrCityNow !== "" && depCityNow !== ""){
                try{
                    const res = await axios.put('http://localhost:8086/flight', // putting the information and editing the searched for element
                                {
                                    flightNumber : flightIdRef.current.value,
                                    depCity : depCityRef.current.value,
                                    depDate : depDateRef.current.value,
                                    depTime : depTimeRef.current.value,
                                    arrCity : arrCityRef.current.value,
                                    arrDate : arrDateRef.current.value,
                                    arrTime : arrTimeRef.current.value,
                                    curPass : curPassRef.current.value,
                                    maxPass : maxPassRef.current.value
                                });
                    console.log(res.data);
                    setFlights(res.data);
                    if (window.confirm("Flight edited successfully. \nProceed to the main flight list to view changes?."))
                    {
                        //window.open('../flights', "You pressed ok!"); // uncomment this line to open in a new window
                        navigate('../flights', {replace : true}); // opens in existing window
                    }
                    else
                    {
                        setFlights();
                        navigate('./', {replace : true}); // opens in existing window
                    };
                }
                
                catch(err) // catching the errors, and redirecting as needed
                {
                    if(err.response.status === 404){
                        
                        if (window.confirm("Flight not in database! \nWould you like to go create it now?")) { // if they want to create a flight, send them to the create page
                            //window.open("../createflight","You pressed OK!"); // uncomment this if you want it to open in a new window
                            navigate('../createflight', {replace : true}); // comment this out if you do not want it to open in the existing window
                        } else { // if they chose not to create a flight, refresh this page and log the error
                            console.log(err.response.data.message);
                            console.log(err.response.status);
                            console.log(err.response.headers);
                            navigate('./', {replace : true}); // opens in existing window
                        }
                        
                    }else{ // catch any other errors in this request
                        console.log(err.response.data.message);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                        
                    }

                }
                
                finally{
                    clearForm(); // clearing out text boxes on button click
                }
            }
            else
            {
                alert("Required information missing.\nVerify that Flight ID, Departure City, and Arrival City are complete and try again.")
                clearForm();
            }
        }
    }
    return(
        <>
        <Center>
            {/* Transforming the flight array into an array of JSX elements for display and formatting */}
           <div>
                <form onSubmit= {(event) => { 
                    event.preventDefault(); // prevent the page from reloading
                    editFlight // edit the flight object with the information entered
                    ({
                        flightNumber : flightIdRef.current.value,
                        depCity : depCityRef.current.value,
                        depDate : depDateRef.current.value,
                        depTime : depTimeRef.current.value,
                        arrCity : arrCityRef.current.value,
                        arrDate : arrDateRef.current.value,
                        arrTime : arrTimeRef.current.value,
                        curPass : curPassRef.current.value,
                        maxPass : maxPassRef.current.value
                    })}}>
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
        </>
    );
}