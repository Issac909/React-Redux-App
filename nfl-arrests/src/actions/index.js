import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchData = () => {
    return dispatch => {
        dispatch( {type: FETCHING_START} );
        axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            console.log(res)
            dispatch( {type: DATA_FETCHED, payload: res.data.value} )
        })
        .catch(err => {
            dispatch( {type: FETCH_FAILED, payload: err.response})
        })
    } 
};

