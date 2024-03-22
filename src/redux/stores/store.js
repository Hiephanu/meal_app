import {createStore, combineReducers} from 'redux'
import favoriteMealsReducer from '../reducers/favoriteMealReducers';

const rootReducer = combineReducers(
    {
        favoriteMeals: favoriteMealsReducer
    }
)

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore