const initialState = {
    flight: '',
    passengers: []
};

export const flightReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CREATE_FLIGHT': // create a new flight
            return {...state, flight: action.payload};
        case 'DELETE_FLIGHT': // delete a flight from the database based on flight number criteria
            return {...state, flight: state.flight?.filter(flight => flight?.flight._id === action.payload?._id)};
        case 'ADD_PASSENGER': // add a passenger that exists in the database to an existing flight
            return{...state, passenger:[...state.passenger, action.payload]};
        case 'REMOVE_PASSENGER': // remove passenger from flights based on first and last name criteria
            return{...state, passenger: state.passenger?.filter(passenger =>passenger?.firstName&&passenger?.lastName === action.payload?.firstName&&passenger?.lastName)};
        // case 'UPDATE_FLIGHT': // update flight based on criteria commented out until I can be certain of the correct way to implament it.
        //     return {...state, flight: action.payload};
        default:
            return state; // returns the previous state and makes no changes

    }
}