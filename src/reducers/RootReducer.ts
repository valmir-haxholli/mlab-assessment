import { combineReducers } from "redux";
import postReducer from "./PostReducer";

const RootReducer = combineReducers({
    post: postReducer
})

export default RootReducer;