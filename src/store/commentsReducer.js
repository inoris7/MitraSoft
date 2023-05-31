const defaultState = {
    comments: []
};

export const SET_COMMENTS = "SET_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

export const commentsReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_COMMENTS:
            return {...state, comments: payload.data}
        default:
            return state;
    }
}

export const fetchComments = (payload) => ({type: FETCH_COMMENTS, payload}); 
export const setComments = (payload) => ({type: SET_COMMENTS, payload}); 