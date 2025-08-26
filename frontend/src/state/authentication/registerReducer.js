import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE} from "./registerTypes";

const initState = {
    loading: false,
    error: false,
    isRegistered: false,
};

const registrationReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case REGISTER_LOADING: {
            return {...state, loading: true, error: false};
        }; 
        case REGISTER_SUCCESS: {
            alert("Registration Successful!")
            return {
                ...state,
                loading: false,
                error: false,
                isRegistered: true
            };
        };
        case REGISTER_FAILURE: {
            alert("Registration Failed! Check your email and password requirements!")
            return {...state, error: true, loading: false, isRegistered: false};
        };
        default:
            return state;
    }
};

export default registrationReducer;