import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "../components/meal/MealItem"
import { useSelector } from "react-redux"
import NavLayout from "../layouts/NavLayout"
const FavoriteMealScreen = () => {
    const favoriteMeals = useSelector(state => state.favoriteMeals.favoriteMeals)
    console.log(favoriteMeals)
    return (
        <NavLayout title={"Favorite List"}>
            {favoriteMeals.length === 0 ?
                <View style={styles.wrapperNone}>
                    <Text>Not have any favorite meal</Text>
                </View>
                :
                <View style={styles.wrapper}>
                    <FlatList
                        data={favoriteMeals}
                        renderItem={({ item }) => <MealItem meal={item} />}
                        numColumns={1}
                    />
                </View>
            }
        </NavLayout>
    )
}

const styles = StyleSheet.create({
    wrapperNone:{
        flex: 1,
        height: '100%',
        backgroundColor: '#ffffff',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper: {
        flex: 1,
        height: '100%',
        backgroundColor: '#ffffff',
        paddingBottom:90
    },
})

export default FavoriteMealScreen