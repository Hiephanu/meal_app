import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, Pressable,Text } from 'react-native'
import NavBar from "../components/common/NavBar"
import Header from "../components/common/Header"

const MainLayout = ({ children }) => {
    const [isPortrait, setIsPortrait] = useState()
    const updateLayout = () => {
        const { width, height } = Dimensions.get('window')
        setIsPortrait(height > width);
    };
    useEffect(() => {
        updateLayout()
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    }, [])
    const logS = ()=>{
        alert(isPortrait)
    }
    return (
        <View style={styles.wrapper}>
            <Pressable onPress={()=>logS()}>
                <Text>Log</Text>
            </Pressable>
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
        width:"100%",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    nav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    }
});

export default MainLayout;
