import api from "../../utils/axiosConfig";
import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE} from "./registerTypes";

export const registerAPI = (creds) => async (dispatch) => {
    dispatch({type: REGISTER_LOADING});

    let data = {
        username: creds.username,
        email: creds.email,
        password: creds.password,
        gender: creds.gender,
        age: creds.age,
        height: creds.height,
        weight: creds.weight,
        activityLevel: creds.activityLevel,
        country: creds.country,
        zipcode: creds.zipcode,
        weightGoal: creds.weightGoal,
        maintenanceCalories: creds.maintenanceCalories,
    }
    data = JSON.stringify(data);
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        const result = await api.post(`${import.meta.env.VITE_CLIENT_URL}/auth/register`, data, {headers: headers});
        dispatch ({type: REGISTER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: REGISTER_FAILURE});
    }
}

