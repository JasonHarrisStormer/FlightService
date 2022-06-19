const initialState = {
    flights: [],
    passenger: ''
};

export const passengerReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CREATE_PASSENGER': // create a new passenger
            return {...state, passenger: action.payload};
        case 'DELETE_PASSENGER': // delete a passenger from the database based on fist and last name criteria
            return {...state, passenger: state.flight?.filter(passenger =>passenger?.firstName&&passenger?.lastName === action.payload?.firstName&&passenger?.lastName)};
        case 'ADD_FLIGHT': // add a flight that exists in the database to an existing passenger
            return{...state, passenger:[...state.passenger, action.payload]};
        case 'REMOVE_FLIGHT': // remove flight from passenger based on flight number criteria
            return{...state, passenger: state.passenger?.filter(flight => flight?.flight._id === action.payload?._id)};
        // case 'UPDATE_PASSENGER': // update passenger based on criteria commented out until I can be certain of the correct way to implament it.
        //     return {...state, passenger: action.payload};
        default:
            return state; // returns the previous state and makes no changes

    }
}