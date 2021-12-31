import {
    COMMANDS_CREATE_FAIL,
    COMMANDS_CREATE_REQUEST, COMMANDS_CREATE_SUCCESS,
    COMMANDS_LIST_FAIL,
    COMMANDS_LIST_REQUEST,
    COMMANDS_LIST_SUCCESS, COMMANDS_UPDATE_FAIL, COMMANDS_UPDATE_REQUEST, COMMANDS_UPDATE_SUCCESS
} from "../constants/commandsConstants";

export const commandListReducer = (state = { commands: [] }, action) => {
    switch (action.type) {
        case COMMANDS_LIST_REQUEST:
            return { loading: true };
        case COMMANDS_LIST_SUCCESS:
            return { loading: false, commands: action.payload };
        case COMMANDS_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const commandCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMANDS_CREATE_REQUEST:
            return { loading: true };
        case COMMANDS_CREATE_SUCCESS:
            return { loading: false, success: true };
        case COMMANDS_CREATE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const commandUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMANDS_UPDATE_REQUEST:
            return { loading: true };
        case COMMANDS_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case COMMANDS_UPDATE_FAIL:
            return { loading: false, error: action.payload, success: false };

        default:
            return state;
    }
};
