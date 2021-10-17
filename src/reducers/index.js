import { combineReducers} from 'redux'
import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITES } from "../actions";

const initalMoviesState={
    list:[],
    favourites:[],
    showFavourite: false
}
export function movies(state= initalMoviesState, action){
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list : action.movies
            }
        case ADD_FAVOURITE:
            return{
               ...state,
               favourites:[action.movie,...state.favourites] 
            }
        case REMOVE_FAVOURITE:
            const filterdArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites:filterdArray
            };   
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourite:action.val
            };
        default:
            return state;
    }
}

const initialSearchState ={
    result:{}
}
export function search(state =initialSearchState,action) {
    return state;
}

const initialRootState={
    movies: initalMoviesState,
    search: initialSearchState
}

export default combineReducers({
    movies,
    search
})
