import { MEALS } from "../data/dummy-data"
const getMealByCategory = (cateogry)=>{
    const mealsArr = MEALS.filter((item)=>{
        return item.categoryIds.includes(cateogry)
    })
    return mealsArr
}

export default getMealByCategory