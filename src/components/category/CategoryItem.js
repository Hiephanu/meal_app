import { useNavigation } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, View } from "react-native"

const CategoryItem = ({ category }) => {
    const navigation = useNavigation()
    const routeToListMeal = ()=>{
        navigation.navigate('ListMeal',{category:  category})
    }
    return (
        <Pressable onPress={routeToListMeal} style={styles.pressable}>
            <View style={[styles.category, { backgroundColor: category.color }]}>
                <Text style={styles.title}>
                    {category.title}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    category: {
        width: "90%",
        paddingVertical: 15,
        marginTop: 10,
        marginLeft: 10,
        borderRadius:10
    },
    pressable:{
        width: "100%",
        display:'flex',
        alignItems:'center',
        marginTop:10
    },
    title: {
        textAlign: 'center',
        fontSize: 25    ,
        fontWeight: 'semibold',
        color: 'white',
        width:'100%'
    }
})
export default CategoryItem