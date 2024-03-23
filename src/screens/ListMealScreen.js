import { ScrollView, StyleSheet, View } from "react-native";
import NavLayout from "../layouts/NavLayout";
import getMealByCategory from "../utils/getMealByCategory";
import MealItem from "../components/meal/MealItem";

const ListMealScreen = ({ route }) => {
    const category = route.params.category;
    const meal = getMealByCategory(category.id);
    console.log(meal);
    return (
        <NavLayout title={category.title}>
            <ScrollView>
                <View style={styles.mealItem}>
                    {meal.map(item => (
                        <MealItem key={item.id} meal={item} />
                    ))}
                </View>
            </ScrollView>
        </NavLayout>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        height: '100%',
        paddingBottom:100
    },
});

export default ListMealScreen;
