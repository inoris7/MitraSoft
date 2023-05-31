const defaultState = {
    currentPage: 1,
}

export const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";

export const pageReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_CURRENT_PAGE:
            return {...state, currentPage: payload}
        default: 
           return state;
    }
};

export const getCurrentPage = (payload) => ({type: GET_CURRENT_PAGE, payload});