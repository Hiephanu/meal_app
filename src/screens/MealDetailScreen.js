import { Image, ScrollView, StyleSheet, Text, View,Dimensions } from "react-native"
import NavLayout from "../layouts/NavLayout"
import MealDetailItem from "../components/mealDetail/MealDetailItem";
import { useState,useEffect } from "react";

const MealDetailScreen = ({ route }) => {
    const meal = route.params.meal
    const [isPortrait, setIsPortrait] = useState(true)
    const updateLayout = () => {
        const { width, height } = Dimensions.get('window');
        setIsPortrait(height > width);
    };
    useEffect(() => {
        updateLayout()
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    }, [isPortrait]);
    return (
        <NavLayout title={meal.title}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
                <Image source={{ uri: `${meal.imageUrl}` }} style={isPortrait ? styles.image : styles.imageHorionzal} />
                <View style={styles.detailWrapper}>
                    <View style={styles.wrapper}>
                        <Text style={styles.mainTitle}>{meal.title}</Text>
                        <View style={styles.criteria}>
                            <Text style={styles.title}>
                                Ingredients:
                            </Text>
                            <View>
                                {meal.ingredients.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.ingredient}>
                                            <Text>- {item}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}>Cooking step : </Text>
                            <View style={styles.step}>
                                {meal.steps.map((item, index) => {
                                    return (
                                        <Text key={index} style={{marginLeft:10,marginTop:10}}>
                                            {`${index + 1}. ${item}`}
                                        </Text>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={styles.item}>
                            <MealDetailItem title={'Duration: '} content={`${meal.duration} minutes`} />
                            <MealDetailItem title={'Complexity: '} content={`${meal.complexity}`} />
                            <MealDetailItem title={'GlutenFree: '} content={`${meal.isGlutenFree ? 'Yes' : 'No'}`} />
                            <MealDetailItem title={'LactoseFree: '} content={`${meal.isLactoseFree ? 'Yes' : 'No'}`} />
                            <MealDetailItem title={'Vegan: '} content={`${meal.isVegan}` ? 'Yes' : 'No'} />
                            <MealDetailItem title={'Vegetarian: '} content={`${meal.isVegetarian ? 'Yes' : 'No'}`} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </NavLayout>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingBottom: 50,
    },
    contentContainer: {
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    mainTitle: {
        fontWeight: '600',
        fontSize: 25,
        color: '#F7550B',
        textAlign: 'center',
        marginTop: 10
    },
    detailWrapper:{
        width:'90%',
    },
    wrapper: {
        marginRight: 7,
        // flex: 1,
        backgroundColor: '#ffffff',
    },

    item: {
        paddingBottom: 20,
        flex: 1
    },

    image: {
        width: '100%',
        height: 250,
        borderEndEndRadius:10
    },
    imageHorionzal:{
        width:'100%',
        height: 400
    },
    ingredient:{
        marginTop:5,
        marginLeft:20
    },
    step: {
        marginLeft: 10
    },
    title: {
        color: '#F7550B',
        fontWeight: '500',
        marginTop: 10
    },
    criteria: {
        marginTop: 20,
    }
})
export default MealDetailScreen