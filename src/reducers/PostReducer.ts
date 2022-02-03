import { PostDispatchTypes, PostType, POST_SUCCESS, POST_FAIL, POST_LOADING } from "./actions/PostActionTypes";

interface DefaultStateI {
    loading: boolean,
    post?: PostType
}

const defaultState: DefaultStateI ={
    loading: false
};

const postReducer = (state: DefaultStateI = defaultState, action: PostDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case POST_FAIL:
            return {
                loading: false
            }
        case POST_LOADING:
            return {
                loading: true
            }
        case POST_SUCCESS:
            return {
                loading: false,
                post: action.payload
            }
        default: 
            return state;
    }
}

export default postReducer;