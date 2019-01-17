import {
    GET_POPULAR_MOVIES,
} from '../actions/types';

let INITIAL_STATE = {
    popularmovies_information: [],
    popularmovies_counts: 0,
    popularmovies_pages: 0,
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return { ...state, popularmovies_information: action.popularmovies , popularmovies_counts: action.popularmovies_counts}
        default:
            return state
    }
}