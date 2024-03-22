import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
import ListMealScreen from '../screens/ListMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Category"} component={CategoryScreen}></Stack.Screen>
                <Stack.Screen name={"ListMeal"} component={ListMealScreen}></Stack.Screen>
                <Stack.Screen name={"MealDetail"} component={MealDetailScreen}></Stack.Screen>
                <Stack.Screen name={"Favorite"} component={FavoriteScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation