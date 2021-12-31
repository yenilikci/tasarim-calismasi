import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userLoginReducer, userRegisterReducer} from "../reducers/userReducers";
import {commandCreateReducer, commandListReducer, commandUpdateReducer} from "../reducers/commandsReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    commandList: commandListReducer,
    commandCreate: commandCreateReducer,
    commandUpdate: commandUpdateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;


const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
