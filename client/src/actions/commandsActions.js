import axios from "axios";
import {COMMANDS_LIST_FAIL, COMMANDS_LIST_REQUEST, COMMANDS_LIST_SUCCESS} from "../constants/commandsConstants";

export const listCommands = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMMANDS_LIST_REQUEST,
        });

        //user login state
        const {
            userLogin: { userInfo },
        } = getState();

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
