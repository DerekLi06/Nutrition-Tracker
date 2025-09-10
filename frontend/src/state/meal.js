import axios from "axios";
import * as types from "./mealTypes";

export const addBreakfast = (payload) => async (dispatch) => {
    dispatch({type: types.ADD_BREAKFAST_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.VITE_CLIENT_URL}/breakfast/create`, payload, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.ADD_BREAKFAST_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_BREAKFAST_FAILURE, payload: err.response});
    };
};

export const getBreakfast = (payload) => async (dispatch) => {
    dispatch({type: types.GET_BREAKFAST_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/breakfast`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.GET_BREAKFAST_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_BREAKFAST_FAILURE});
    };
};

export const deleteBreakfast = (payload) => async (dispatch) => {
    dispatch({type: types.DELETE_BREAKFAST_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.VITE_CLIENT_URL}/breakfast/${payload}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.DELETE_BREAKFAST_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_BREAKFAST_FAILURE});
    };
};

export const addLunch = (payload) => async (dispatch) => {
    dispatch({type: types.ADD_LUNCH_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.VITE_CLIENT_URL}/lunch/create`, payload, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.ADD_LUNCH_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_LUNCH_FAILURE, payload: err.response});
    };
};

export const getLunch = (payload) => async (dispatch) => {
    dispatch({type: types.GET_LUNCH_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/lunch`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.GET_LUNCH_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_LUNCH_FAILURE});
    };
};

export const deleteLunch = (payload) => async (dispatch) => {
    dispatch({type: types.DELETE_LUNCH_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.VITE_CLIENT_URL}/lunch/${payload}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.DELETE_LUNCH_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_LUNCH_FAILURE});
    };
};

export const addDinner = (payload) => async (dispatch) => {
    dispatch({type: types.ADD_DINNER_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.VITE_CLIENT_URL}/dinner/create`, payload, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.ADD_DINNER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_DINNER_FAILURE, payload: err.response});
    };
};

export const getDinner = (payload) => async (dispatch) => {
    dispatch({type: types.GET_DINNER_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/dinner`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.GET_DINNER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_DINNER_FAILURE});
    };
};

export const deleteDinner = (payload) => async (dispatch) => {
    dispatch({type: types.DELETE_DINNER_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.VITE_CLIENT_URL}/dinner/${payload}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.DELETE_DINNER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_DINNER_FAILURE});
    };
};

export const addSnack = (payload) => async (dispatch) => {
    dispatch({type: types.ADD_SNACK_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.VITE_CLIENT_URL}/snack/create`, payload, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.ADD_SNACK_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_SNACK_FAILURE, payload: err.response});
    };
};

export const getSnack = (payload) => async (dispatch) => {
    dispatch({type: types.GET_SNACK_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/snack`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.GET_SNACK_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_SNACK_FAILURE});
    };
};

export const deleteSnack = (payload) => async (dispatch) => {
    dispatch({type: types.DELETE_SNACK_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.VITE_CLIENT_URL}/snack/${payload}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: types.DELETE_SNACK_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_SNACK_FAILURE});
    };
};