export const POST_LOADING = "POST_LOADING";
export const POST_FAIL = "POST_FAIL";
export const POST_SUCCESS = "POST_SUCCESS";

export type PostType = {
    post: PostData
}

export type PostData = {
    id: number,
    title: string,
    body: string
}

export interface PostLoading {
    type: typeof POST_LOADING
}

export interface PostFailed {
    type: typeof POST_FAIL
}

export interface PostSuccess {
    type: typeof POST_SUCCESS,
    payload: PostType
}

export type PostDispatchTypes = PostLoading | PostFailed | PostSuccess