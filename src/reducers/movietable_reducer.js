import {
    GET_IPAGE_MOVIES,
    MOVIE_TABLE_INIT,
    SET_LOADING,
    GET_SELECTED_MOVIE_DETAILS,
    GET_SELECTED_MOVIE_CASTS,
} from '../actions/types';

let INITIAL_STATE = {
    popularmovies: [],
    total_movies: '',
    currentpage: 1,
    isloading: true,
    currentselectedmovieid: 0,
    imoviedetails:{
        adult:'',
        budget:'',
        genres:'',
        homepage:'',
        status:'',
        release_date:'',
        runtime:'',
        revenue:'',
        production_companies:[],
        vote_average:'',
        vote_count:'',
        images:{
            backdrops:[],
        }
    },
    imoviecasts:[]
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state
                , isloading: true
                }

        case GET_SELECTED_MOVIE_DETAILS:
            return {...state
                , currentselectedmovieid: action.movie_ID
                , imoviedetails:action.imoviedetails
                }

        case MOVIE_TABLE_INIT:
            return { ...state
                , popularmovies: action.popularmovies 
                , total_movies: action.total_movies
                , isloading:false
                }

        case GET_IPAGE_MOVIES:
            return { ...state
                , popularmovies: action.popularmovies
                , currentpage: action.current_page
                , isloading: false
                }

        case GET_SELECTED_MOVIE_CASTS:
            return { ...state
                , imoviecasts: action.imoviecasts
                }

        default:
            return state
    }
}