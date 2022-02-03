import axios from "axios";
import { Dispatch } from "redux";
import { PostDispatchTypes, POST_SUCCESS, POST_FAIL, POST_LOADING } from "./PostActionTypes";

export const GetPost = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
        dispatch({
            type: POST_LOADING
        })

        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

        dispatch({
            type: POST_SUCCESS,
            payload: res.data
        })

    } catch(e) {
        dispatch({
            type: POST_FAIL
        })
    }
}