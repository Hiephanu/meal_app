import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'

const HeaderNavigate = ({title}) => {
    const navigation = useNavigation()
    const goBack = ()=>{
        navigation.goBack()
    }
    return (
        <View style={styles.wrapper}>
            <View>
                <Pressable onPress={goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" style={styles.icon}/>
                </Pressable>
            </View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 14,
        paddingVertical: 20,
        backgroundColor: '#F7550B'
    },
    icon: {
        marginLeft:20
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})
export default HeaderNavigate