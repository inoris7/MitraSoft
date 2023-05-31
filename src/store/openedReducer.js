const defaultState = {
    opened: false,   
};

export const SET_CLOSED = "SET_CLOSED";
export const TOGGLE_OPENED = "TOGGLE_OPENED";

export const openedReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_CLOSED:
            return {...state, opened: false}
        case TOGGLE_OPENED:
            return {...state, opened: !state.opened}    
        default:
            return state;
    }
}


export const setClosed = () => ({type: SET_CLOSED});
export const toggleOpened = () => ({type: TOGGLE_OPENED});
