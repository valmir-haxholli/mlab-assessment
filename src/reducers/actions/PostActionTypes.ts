export const POST_LOADING = "POST_LOADING";
export const POST_FAIL = "POST_FAIL";
export const POST_SUCCESS = "POST_SUCCESS";

export type PostType = {
    id: number,
    title: string,
    body: string
}

interface PostLoading {
    type: typeof POST_LOADING
}

interface PostFailed {
    type: typeof POST_FAIL
}

interface PostSuccess {
    type: typeof POST_SUCCESS,
    payload: {
        posts: PostType
    }
}

export type PostDispatchTypes = PostLoading | PostFailed | PostSuccess