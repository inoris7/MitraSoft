const defaultState = {
    posts: [],
    filteredPosts: [],    
};

export const SET_POSTS = "SET_POSTS";
export const FETCH_POSTS = "FETCH_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";
export const RESET_POSTS = "RESET_POSTS";
export const SORT_POSTS = "SORT_POSTS";

export const postsReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_POSTS:
            return {...state, posts: payload.data, filteredPosts: state.posts}
        case SEARCH_POSTS:
            return {...state, filteredPosts: [...state.posts.filter(
                item => item.title.toLowerCase().includes(payload.toLowerCase())
            )]}
        case RESET_POSTS:
            return {...state, filteredPosts: [...state.posts]}
        case SORT_POSTS:
        return {...state, filteredPosts: [...state.filteredPosts.sort((a, b) => a.title > b.title ? 1 : -1)]}
        default:
            return state;
    }
};

export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const searchPosts = (payload) => ({type: SEARCH_POSTS, payload});
export const resetPosts = () => ({type: RESET_POSTS});
export const fetchPosts = () => ({type: FETCH_POSTS});
export const sortPosts = () => ({type: SORT_POSTS});
