import { add_favorite_meal, remove_favorite_meal } from "../actions/favoriteMealActions"

const initialState ={
    favoriteMeals: []
}

const favoriteMealsReducer = (state = initialState,action) =>{
    switch(action.type){
        case add_favorite_meal:
            return {
                ...state,
                favoriteMeals:[...state.favoriteMeals,action.payload]
            }
        case remove_favorite_meal:
            return {
                ...state,
                favoriteMeals:state.favoriteMeals.filter(meal => meal.id !== action.payload)
            }
        default:
            return state
    }
}

export default favoriteMealsReducer