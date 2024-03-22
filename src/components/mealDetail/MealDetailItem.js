import { View,Text, StyleSheet } from "react-native"

const MealDetailItem = ({title,content}) => {
    return (
        <View style={styles.criteria}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text>
                {content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#F7550B',
        fontWeight:'500'
    },
    criteria:{
        flexDirection:'row',
        gap:10,
        marginTop:5
    }
})
export default MealDetailItem