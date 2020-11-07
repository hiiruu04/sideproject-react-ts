import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

const RootReducer = combineReducers({
    authUser: authReducer
});

export default RootReducer;