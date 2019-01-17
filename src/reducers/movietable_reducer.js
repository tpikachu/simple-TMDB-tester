import {
    GET_IPAGE_MOVIES,
    MOVIE_TABLE_INIT,
    CHANGE_PAGE,
    SET_LOADING,
} from '../actions/types';

let INITIAL_STATE = {
    popularmovies: [],
    total_movies: '',
    popularmovies_pages: 0,
    currentpage: 1,
    isloading: true,
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isloading: true}
        case CHANGE_PAGE:
            return { ...state}
        case MOVIE_TABLE_INIT:
            return { ...state, popularmovies: action.popularmovies , total_movies: action.total_movies, isloading:false}
        case GET_IPAGE_MOVIES:
            return { ...state, popularmovies: action.popularmovies, currentpage:action.current_page, isloading:false}
        default:
            return state
    }
}