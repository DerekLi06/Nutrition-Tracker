import axios from "axios";
import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE} from "./registerTypes";

export const registerAPI = (creds) => async (dispatch) => {
    dispatch({types: REGISTER_LOADING});

    let data = {
        username: creds.username,
        email: creds.email,
        password: creds.passwords,
        gender: creds.gender,
        age: creds.age,
        height: creds.height,
        weight: creds.weight,
        activityLevel: creds.activityLevel,
        country: creds.country,
        zipcode: creds.zipcode,
        weightGoal: creds.weightGoal,
        maintenceCalories: creds.gender == "male" ? (Math.round((10 * parseInt(creds.weight) + 6.25 * parseInt(creds.height) - 5 * parseInt(creds.age) + 5) * parseFloat(creds.activityLevel))).toString() : (Math.round((10 * parseInt(creds.weight) + 6.25 * parseInt(creds.height) - 5 * parseInt(creds.age) - 161) * parseFloat(creds.activityLevel))).toString()

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

