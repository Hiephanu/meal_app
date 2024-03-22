import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const NavBar = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const pushScreen = (screen) => {
        navigation.navigate(`${screen}`)
    }
    const newFunction = ()=>{
        alert("Functionality is under development.")
    }
    return (
        <View style={styles.wrapper}>
            <Pressable onPress={() => pushScreen('Category')}>
                {route.name === 'Category'
                    ? <Feather name="home" size={24} color="#F7550B" />
                    : <Feather name="home" size={24} color="black" />
                }
            </Pressable>
            <Pressable onPress={() => newFunction()}>
                <FontAwesome5 name="blog" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() =>newFunction()}>
                <Entypo name="share" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => pushScreen('Favorite')}>
                {route.name === 'Favorite'
                    ? <AntDesign name="heart" size={24} color="#F7550B" />
                    : <AntDesign name="heart" size={24} color="black" />}
            </Pressable>
            <Pressable  onPress={() => newFunction()}>
                <AntDesign name="user" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 4,
        borderTopColor: '#f0f0f0',
    },
    image: {
        width: 20,
        height: 20
    }
})
export default NavBar