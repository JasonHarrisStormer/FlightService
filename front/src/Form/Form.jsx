import { useRef } from 'react';

export const Form = () => {
    
    const inputRef = useRef();

    

    return (
        <form>
            <h3>Enter Search Criteria:</h3>
            <div><input id="Destination" type="text" placeholder="Destination"/></div>
            <div><input id="Left From" type="text" placeholder="Left From"/></div>
            <div><input id="Flight Number" type="number" placeholder="Flight Number"/></div>
            {/* <div><input id="Passenger Limit" type="range" plaeholder="Range of Passengers"/></div> */}
            <button onClick={() => console.log(inputRef.current.value)}>Search Flights</button>
        </form>
    );
}