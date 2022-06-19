import { Center } from "../components/Formatting/StyledComponents";
import { useSelector } from "react-redux";


export const Flights = () => {
    //const { flightId, depCity, depTime, depDate, arrCity, arrTime, arrDate, maxPass } = useSelector(store => store);

    return(
        <Center>
            Welcome to Flight Services!
           {/* {flightId && <div>Flight ${flightId} with a maximum capacity of ${maxPass} <br /> Departed ${depCity} on ${depDate} at ${depTime} <br />Arrived at ${arrCity} on ${arrDate} at ${arrTime}</div>};  */}
        </Center>
    );
}