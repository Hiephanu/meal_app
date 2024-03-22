import { View,StyleSheet } from "react-native"
import HeaderNavigate from "../components/common/HeaderNavigate"
import NavBar from "../components/common/NavBar"

const NavLayout = ({children,title})=>{
    return (
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <View>
                <HeaderNavigate title={title}/>
            </View>
            <View style={{flex:1,flexGrow:1}}>
                {children}
            </View>
            <View style={styles.nav}>
                <NavBar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        width:'100%',
        position: 'relative',
    },
    header: {
    },
    content: {
        flex: 1,
    },
    nav:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%'
    }
})

export default NavLayout