export const add_favorite_meal = 'ADD'
export const remove_favorite_meal = 'DELETE'

export const addFavoriteMeal = (meal)=>{ 
    return {
        type: add_favorite_meal,
        payload: meal
    }
}

export const removeFavoriteMeal = (mealId)=>{
    return {
        type: remove_favorite_meal,
        payload: mealId
    }
}