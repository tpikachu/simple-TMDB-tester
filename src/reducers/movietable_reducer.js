import {
    GET_IPAGE_MOVIES,
    MOVIE_TABLE_INIT,
    SET_LOADING,
    SET_CURRENT_SELECTED_MOVIEID,
} from '../actions/types';

let INITIAL_STATE = {
    popularmovies: [],
    total_movies: '',
    popularmovies_pages: 0,
    currentpage: 1,
    isloading: true,
    currentselectedmovieid: 0,
    imoveimages:[],
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isloading: true}

        case SET_CURRENT_SELECTED_MOVIEID:
        console.log(action.imoveimages);
            return {...state, currentselectedmovieid: action.movie_ID, imoveimages:action.imoveimages}

        case MOVIE_TABLE_INIT:
            return { ...state
                , popularmovies: action.popularmovies 
                , total_movies: action.total_movies
                , isloading:false
                , currentselectedmovieid:action.currentselectedmovieid
                }

        case GET_IPAGE_MOVIES:
            return { ...state
                , popularmovies: action.popularmovies
                , currentpage:action.current_page
                , isloading:false}

        default:
            return state
    }
}
/*
{
    "vote_count": 2536,
    "id": 297802,
    "video": false,
    "vote_average": 6.9,
    "title": "Aquaman",
    "popularity": 304.136,
    "poster_path": "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    "original_language": "en",
    "original_title": "Aquaman",
    "genre_ids": [
        28,
        14,
        878,
        12
    ],
    "backdrop_path": "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
    "adult": false,
    "overview": "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
    "release_date": "2018-12-07"
}
*/