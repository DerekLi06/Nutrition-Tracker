import {LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT} from "./loginTypes";

let token = localStorage.getItem("token");

const initState = {
	loading: false,
	error: false,
	isAuth: !!token,
	token: token,
};

const authenticationReducer = (state = initState, {type, payload}) => {
	switch (type) {
		case LOGIN_LOADING: {
			return {...state, loading: true, error: false};
		};
		case LOGIN_SUCCESS: {
            alert("Login Successful!")
			localStorage.setItem("token", JSON.stringify(payload.token))
			return {
				...state,
				loading: false,
				error: false,
				isAuth: true,
				token: payload.token
			};
		};
		case LOGIN_FAILURE: {
            alert("Login Failed! Double Check Your Email or Password!")
			return {...state, error: true, loading: false, isAuth: false};
		};
		case LOGOUT: {
			localStorage.removeItem("token");
			return {...state, isAuth: false};
		};
		default:
			return state;
	}
};

export default authenticationReducer;