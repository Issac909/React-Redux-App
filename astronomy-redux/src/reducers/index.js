import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../actions';

const initalState = {
    pictures: [],
    isFetchingData: false,
    error: ''
}

export const reducer = (state = initalState, {action, payload}) => {
    switch(action) {
        case FETCHING_DATA:
            return {
                ...state,
                isFetchingData: true,
                pictures: []
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pictures: payload,
                isFetchingData: false
            };
        case FETCH_DATA_FAILED:
            return {
                ...state,
                isFetchingData: false,
                error: payload
            };
        default: 
            return state;
    }
};
