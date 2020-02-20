import axios from 'axios'
{/* API Key = TsEagflgVILsrfcl2WVtyHpaa4LV2k2LOVg0kush */ }

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const fetchData = () => dispatch => {
    dispatch ({ type: FETCHING_DATA });
    axios
        .get(`https://api.nasa.gov/EPIC/api/enhanced/all?api_key=TsEagflgVILsrfcl2WVtyHpaa4LV2k2LOVg0kush`)
        .then(res => {
            res.data.forEach(point => {
                console.log(point)
            })
            })
        .catch(err => console.log(err));
}