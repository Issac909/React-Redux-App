import { FETCHING_START, DATA_FETCHED, FETCH_FAILED } from '../actions'

const initialState = {
    isLoading: false,
    category: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state, 
                isLoading: true
            };
        case DATA_FETCHED: 
            return {
                ...state,
                isLoading: false,
                category: action.payload
            };
        case FETCH_FAILED: 
            return {
                ...state,
                isLoading: false,
                error: 'THERE WAS A PROBLEM LOADING THIS JOKE. EITHER THE SERVER IS DOWN OR CHUCK NORRIS HAS BANNED YOUR IP'
            }
        // case JOKE_DATA_FETCH:
        //     return {
        //         ...state,
        //         isLoading: true
        //     };
        // case FETCH_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         joke: action.payload
        //     }
        default:
            return state;
    };
};