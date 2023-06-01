import {combineReducers} from "redux";
//import * as alertReducer from "./alert/alert.reducer";
import * as userReducer from './user/user.reducer'
import * as movieReducer from './movies/movies.reducer'

const rootReducer = combineReducers({
    [userReducer.userReducerFeatureKey]: userReducer.reducer,
    [movieReducer.MOVIES_FEATURE_KEY] : movieReducer.moviesReducer

});
export {rootReducer}