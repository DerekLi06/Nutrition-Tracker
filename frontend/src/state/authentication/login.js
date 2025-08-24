import axios from "axios";
import {LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT} from "./loginTypes";

export const loginAPI = (creds) => async (dispatch) => {
    dispatch({ type: LOGIN_LOADING });

    let data = {
        email: creds.email,
        password: creds.password
    };
    data = JSON.stringify(data);
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        const result = await axios.post(`${import.meta.env.CLIENT_URL}/auth/login`, data, {headers: headers});
        dispatch ({type: LOGIN_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: LOGIN_FAILURE});
    }
};

export const logoutAPI = () => ({ type: LOGOUT });
