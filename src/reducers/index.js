import {
    GET_POPULAR_MOVIES,
} from '../actions/types';

let INITIAL_STATE = {
    popularmovies_information: [],
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return { ...state, popularmovies_information: action.popularmovies }
        default:
            return state
    }
}