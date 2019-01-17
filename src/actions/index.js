import axios from 'axios';
import {
    GET_POPULAR_MOVIES,
} from './types';

const ROOT_URL = process.env.API_URI || 'https://api.themoviedb.org/3';
const api_key = 'f4476e12e8f3b8b1f4cc6d683d5aae69';
const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDQ3NmUxMmU4ZjNiOGIxZjRjYzZkNjgzZDVhYWU2OSIsInN1YiI6IjVjM2VhM2ExYzNhMzY4Njk0ZTNmYTRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0deV9DZwBJUW0c2sQSr2s8Q30LIo-7LP3HMKIpmpa9c';
axios.defaults.baseURL = ROOT_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

//https://image.tmdb.org/t/p/original

export function getpopularmovies() {
    return function (dispatch) {
        axios
            .get(`/discover/movie?sort_by=popularity.desc&api_key=${api_key}&&page=1`)
            .then(res => {
                console.log(res.data.results);
                dispatch({type: GET_POPULAR_MOVIES, popularmovies: res.data.results, popularmovies_counts: res.total_results})
            })
            .catch(error => {
                console.log(error);
            });
    }
}