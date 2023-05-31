const defaultState = {
    user: {},
    userPosts: [],
}

export const SET_USER = "SET_USER";
export const SET_USER_POSTS = "SET_USER_POSTS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";

export const userReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_USER:
            return {...state, user: payload.data}
        case SET_USER_POSTS:
            return {...state, userPosts: payload.data}
        default:
            return state;
    }
}

export const setUser = (payload) => ({type: SET_USER, payload});
export const setUserPosts = (payload) => ({type: SET_USER_POSTS, payload});
export const fetchUser = (payload) => ({type: FETCH_USER, payload}); 
export const fetchUserPosts = (payload) => ({type: FETCH_USER_POSTS, payload}); 