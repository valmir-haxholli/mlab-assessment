import { Dispatch } from "redux";

export const GetPost = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: "LOADING_POST"
        })
    } catch(e) {

    }
}