export const FlightForm = () => {
    return(
        <FlightForm>
            <div>
            <label htmlFor="flightId">Flight Number:</label>
            <input id="flightId" type="number" placeholder="Flight Number"/>
            </div><div>
            <label htmlFor="depCity">Departure City:</label>
            <input id="depCity" type="text" placeholder="Departure City"/>
            </div><div>
            <label htmlFor="depDate">Departure Date:</label>
            <input id="depDate" type="date" placeholder="Departure Date"/>
            </div><div>
            <label htmlFor="depTime">Departure Time:</label>
            <input id="depTime" type="time" placeholder="Departure Time"/>
            </div><div>
            <label htmlFor="arrCity">Arrival City:</label>
            <input id="arrCity" type="text" placeholder="Arrival City"/>
            </div><div>
            <label htmlFor="arrDate">Arrival Date:</label>
            <input id="arrDate" type="date" placeholder="Arrival Date"/>
            </div><div>
            <label htmlFor="arrTime">Arrival Time:</label>
            <input id="arrTime" type="time" placeholder="Arrival Time"/>
            </div><div>
            <label htmlFor="currPass">Current Passenger Count:</label>
            <input id="currPass" type="number" placeholder="Current Number of Passengers"/>
            </div><div>
            <label htmlFor="maxPass">Maximum Passenger Count:</label>
            <input id="maxPass" type="number" placeholder="Maximum Number of Passengers"/>
            </div>
        </FlightForm>
    );
}