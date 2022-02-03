export const POST_LOADING = "POST_LOADING";
export const POST_FAIL = "POST_FAIL";
export const POST_SUCCESS = "POST_SUCCESS";

interface PostLoading {
    type: typeof POST_LOADING
}

interface PostFailed {
    type: typeof POST_FAIL
}

interface PostSuccess {
    type: typeof POST_SUCCESS,
    paylod: 
}