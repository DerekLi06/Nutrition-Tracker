import axios from "axios";
import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE} from "./registerTypes";

export const registerAPI = (creds) => async (dispatch) => {
    dispatch({types: REGISTER_LOADING});

    let data = {
        email: creds.email,
        password: creds.passwords
    }
    data = JSON.stringify(data);
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        const result = await axios.post(`${import.meta.env.VITE_CLIENT_URL}/auth/register`, data, {headers: headers});
        dispatch ({type: REGISTER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: REGISTER_FAILURE});
    }
}

