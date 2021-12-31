import axios from "axios";
import {
    COMMANDS_CREATE_FAIL,
    COMMANDS_CREATE_REQUEST,
    COMMANDS_CREATE_SUCCESS,
    COMMANDS_DELETE_FAIL,
    COMMANDS_DELETE_REQUEST,
    COMMANDS_DELETE_SUCCESS,
    COMMANDS_LIST_FAIL,
    COMMANDS_LIST_REQUEST,
    COMMANDS_LIST_SUCCESS,
    COMMANDS_UPDATE_FAIL,
    COMMANDS_UPDATE_REQUEST,
    COMMANDS_UPDATE_SUCCESS
} from "../constants/commandsConstants";

export const listCommands = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMMANDS_LIST_REQUEST,
        });

        //user login state
        const {
            userLogin: { userInfo },
        } = getState();

        console.log(userInfo.token)

        //authorization
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`http://localhost:5000/api/v1/commands`, config);

        dispatch({
            type: COMMANDS_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: COMMANDS_LIST_FAIL,
            payload: message,
        });
    }
};

export const createCommandAction = (title, m1, m2, m3, m4, m5, m6, category) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: COMMANDS_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            `http://localhost:5000/api/v1/commands/create`,
            { title, m1, m2, m3, m4, m5, m6, category },
            config
        );

        dispatch({
            type: COMMANDS_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: COMMANDS_CREATE_FAIL,
            payload: message,
        });
    }
};

export const updateCommandAction = (id, title, m1, m2, m3, m4, m5, m6, category) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: COMMANDS_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //put request
        const { data } = await axios.put(
            `http://localhost:5000/api/v1/commands/${id}`,
            { title, m1, m2, m3, m4, m5, m6, category },
            config
        );

        dispatch({
            type: COMMANDS_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: COMMANDS_UPDATE_FAIL  ,
            payload: message,
        });
    }
};

export const deleteCommandAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMMANDS_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.delete(`http://localhost:5000/api/v1/commands/${id}`, config);

        dispatch({
            type: COMMANDS_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: COMMANDS_DELETE_FAIL,
            payload: message,
        });
    }
};
