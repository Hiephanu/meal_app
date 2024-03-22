import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/category/CategoryItem';

const CategoryScreen = () => {
    return (
        <MainLayout>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Category</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.wrapper}>
                    {CATEGORIES.map(category => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </View>
            </ScrollView>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#F7550B',
        marginLeft:'10%',
        fontSize: 25,
        fontWeight: 600,
        marginLeft:'5%',
        marginTop: 25,
        marginBottom: 25,
    },
    titleWrapper: {
        backgroundColor: '#ffffff',
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 100,
        alignItems: 'center',
    },
    scrollView: {
        flex:1
    }
});

export default CategoryScreen;
