import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_PENDDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED 
} from './constants';

const intialStateSearchField = {
    searchField: ''
}

export const searchRobots = (state = intialStateSearchField, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const intialStateRobots = {
    isPendding: false,
    robots: [],
    error: '',
}

export const setRobots = (state = intialStateRobots, action = {}) => {
    switch(action.type) {
        case REQUEST_PENDDING:
            return Object.assign({}, state, {isPendding: true});
        case REQUEST_SUCCESS:
            return Object.assign({}, state, {isPendding: false, robots: action.payload});
        case REQUEST_FAILED:
            return Object.assign({}, state, {isPendding: false, error: action.payload});
        default:
            return state;
    }
} 