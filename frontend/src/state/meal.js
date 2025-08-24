import axios from "axios";
import * as types from "./mealTypes";

export const addBreakfast = (payLoad) => async (dispatch) => {
    dispatch({type: types.ADD_BREAKFAST_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.CLIENT_URL}/breakfast/create`, payLoad);
        dispatch({type: types.ADD_BREAKFAST_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_BREAKFAST_FAILURE, payload: err.response});
    };
};

export const getBreakfast = (payLoad) => async (dispatch) => {
    dispatch({type: types.GET_BREAKFAST_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.CLIENT_URL}/breakfast`);
        dispatch({type: types.GET_BREAKFAST_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_BREAKFAST_FAILURE});
    };
};

export const deleteBreakfast = (payLoad) => async (dispatch) => {
    dispatch({type: types.DELETE_BREAKFAST_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.CLIENT_URL}/breakfast${payLoad}`);
        dispatch({type: types.DELETE_BREAKFAST_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_BREAKFAST_FAILURE});
    };
};

export const addLunch = (payLoad) => async (dispatch) => {
    dispatch({type: types.ADD_LUNCH_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.CLIENT_URL}/lunch/create`, payLoad);
        dispatch({type: types.ADD_LUNCH_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_LUNCH_FAILURE, payload: err.response});
    };
};

export const getLunch = (payLoad) => async (dispatch) => {
    dispatch({type: types.GET_LUNCH_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.CLIENT_URL}/lunch`);
        dispatch({type: types.GET_LUNCH_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_LUNCH_FAILURE});
    };
};

export const deleteLunch = (payLoad) => async (dispatch) => {
    dispatch({type: types.DELETE_LUNCH_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.CLIENT_URL}/lunch${payLoad}`);
        dispatch({type: types.DELETE_LUNCH_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_LUNCH_FAILURE});
    };
};

export const addDinner = (payLoad) => async (dispatch) => {
    dispatch({type: types.ADD_DINNER_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.CLIENT_URL}/dinner/create`, payLoad);
        dispatch({type: types.ADD_DINNER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_DINNER_FAILURE, payload: err.response});
    };
};

export const getDinner = (payLoad) => async (dispatch) => {
    dispatch({type: types.GET_DINNER_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.CLIENT_URL}/dinner`);
        dispatch({type: types.GET_DINNER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_DINNER_FAILURE});
    };
};

export const deleteDinner = (payLoad) => async (dispatch) => {
    dispatch({type: types.DELETE_DINNER_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.CLIENT_URL}/dinner${payLoad}`);
        dispatch({type: types.DELETE_DINNER_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_DINNER_FAILURE});
    };
};

export const addSnack = (payLoad) => async (dispatch) => {
    dispatch({type: types.ADD_SNACK_REQUEST});
    try {
        const result = await axios.post(`${import.meta.env.CLIENT_URL}/snack/create`, payLoad);
        dispatch({type: types.ADD_SNACK_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.ADD_SNACK_FAILURE, payload: err.response});
    };
};

export const getSnack = (payLoad) => async (dispatch) => {
    dispatch({type: types.GET_SNACK_REQUEST});
    try {
        const result = await axios.get(`${import.meta.env.CLIENT_URL}/snack`);
        dispatch({type: types.GET_SNACK_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.GET_SNACK_FAILURE});
    };
};

export const deleteSnack = (payLoad) => async (dispatch) => {
    dispatch({type: types.DELETE_SNACK_REQUEST});
    try {
        const result = await axios.delete(`${import.meta.env.CLIENT_URL}/snack${payLoad}`);
        dispatch({type: types.DELETE_SNACK_SUCCESS, payload: result.data});
    } catch (err) {
        dispatch({type: types.DELETE_SNACK_FAILURE});
    };
};