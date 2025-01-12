import { combineReducers } from "redux";
import UserCredentials from "./UserCredentials";

const reducers = combineReducers({
    User: UserCredentials 
})

export default reducers;