import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import NavBar from "../components/common/NavBar"
import Header from "../components/common/Header"

const MainLayout = ({ children }) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Header />
            </View>
            <View style={styles.content}>
                {children}
            </View>
            <View style={styles.nav}>
                <NavBar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%'
    },
    content: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    }
});

export default MainLayout;
