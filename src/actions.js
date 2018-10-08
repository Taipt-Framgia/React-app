import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_PENDDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED 
} from './constants';

export const setSearchField = (text) => {
    return ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
    })
}

export const requestRobots = (dispatch) => {
    dispatch({type: REQUEST_PENDDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();
    })
    .then(datas => {
        dispatch({type: REQUEST_SUCCESS, payload: datas});
    })
    .catch(error => {
        dispatch({type: REQUEST_FAILED, payload: error});
    });
}