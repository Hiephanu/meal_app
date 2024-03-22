import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import NavBar from "../components/common/NavBar";
import Header from "../components/common/Header";

const MainLayout = ({ children }) => {
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
        <View style={styles.wrapper}>
            {isPortrait && (
                <View style={styles.header}>
                    <Header />
                </View>
            )}
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
    header: {
    },
    content: {
        flex: 1,
    },
    nav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    }
});

export default MainLayout;
