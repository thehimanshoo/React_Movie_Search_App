
import  * as moviesAction from './movies.action'

export const MOVIES_FEATURE_KEY = 'movies'

let initialState = {
    moviesData : [],
    loading : false,
    errorMessage : '',
     watchList : {}
}

 export const moviesReducer = (state=initialState, action) => {
    let {type , payload} = action
    switch (type)
    {
        case moviesAction.SEARCH_MOVIES_REQUEST : 
        return {
            ...state,
            loading : true
        }
        
        case moviesAction.SEARCH_MOVIES_SUCCESS : 
        return {
            ...state,
            moviesData : payload,
            loading : false
        }

        case moviesAction.SEARCH_MOVIES_FAILURE : 
        return {
            ...state,
            loading : false,
            errorMessage : payload
        }

        case moviesAction.GET_WATCHLIST_REQUEST : 
        return {
            ...state,
            loading : true
        }
        
        case moviesAction.GET_WATCHLIST_SUCCESS : 
        return {
            ...state,
            watchList : payload.data.movie,
            loading : false
        }

        case moviesAction.GET_WATCHLIST_FAILURE : 
        return {
            ...state,
            loading : false,
            errorMessage : payload
        }

        default  : return state
        
    }
    
}