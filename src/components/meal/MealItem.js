import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMeal, removeFavoriteMeal } from "../../redux/actions/favoriteMealActions";
import { AntDesign } from '@expo/vector-icons'

const MealItem = ({ meal }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const favoriteMeals = useSelector(state => state.favoriteMeals.favoriteMeals)
    const naviagteToDetail = () => {
        navigation.navigate('MealDetail', { meal: meal })
    }
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const hanleFavorite = (id) => {
        if (favoriteMeals.includes(id)) {
            dispatch(removeFavoriteMeal(meal.id))
        } else {
            dispatch(addFavoriteMeal(meal))
        }
    }
    return (
        <View style={styles.wrapper}>
            <Pressable onPress={naviagteToDetail}>
                <View style={styles.mealItem}>
                    <Image source={{ uri: `${meal.imageUrl}` }} style={styles.image} props={{ resizeMode: 'cover' }} />
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
            </Pressable>
            <View style={styles.timeWrapper}>
                <AntDesign name="clockcircleo" size={20} color="#F7550B" />
                <Text style={styles.time}>{meal.duration} minutes</Text>
            </View>
            <View style={styles.action}>
                <Text style={styles.complexity}>{capitalizeFirstLetter(meal.complexity)}</Text>
                <Pressable onPress={() => hanleFavorite(meal)} style={styles.heartIcon}>
                    {favoriteMeals.includes(meal)
                        ? <AntDesign name="heart" size={24} color="#F7550B" />
                        : <AntDesign name="heart" size={24} color="black" />}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    action: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'90%'
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    heartIcon: {
        marginTop: 15
    },
    wrapper: {
        width: '95%',
        marginLeft: '2.5%',
        shadowColor: '#9ba9bd',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 3,
        marginTop: 20,
        borderRadius: 20,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
        marginTop: 10
    },
    timeWrapper:{
        flexDirection:'row',
        gap:10,
        color:'#F7550B',
        marginLeft:20,
        marginTop:15,
        width:'90%'
    },
    time:{
        color:'#F7550B',
        marginTop:2
    },
    complexity: {
        marginTop: 15
    }
})

export default MealItem