import {COMMANDS_LIST_FAIL, COMMANDS_LIST_REQUEST, COMMANDS_LIST_SUCCESS} from "../constants/commandsConstants";

export const commandListReducer = (state = { commands: [] }, action) => {
    switch (action.type) {
        case COMMANDS_LIST_REQUEST:
            return { loading: true };
        case COMMANDS_LIST_SUCCESS:
            return { loading: false, notes: action.payload };
        case COMMANDS_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
