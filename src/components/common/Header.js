import { Image, StyleSheet, TextInput, View, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
           <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    Account
                </Text>
                <AntDesign name="setting" size={24} color="black" style={styles.setting}/>
           </View>
            <View style={styles.userInforWrapper}>
                <View style={styles.userWrapper}>
                    <Image source={{ uri: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' }} style={styles.avatar} />
                    <View style={styles.userInfor}>
                        <Text style={styles.name}>Doan Hiep</Text>
                        <Text style={styles.job}>Software engineering</Text>
                    </View>
                </View>
                <View>
                    <AntDesign name="arrowright" size={24} color="black" style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    userInforWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 15,
        paddingVertical:15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: '90%'
    },
    titleWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'95%',
        marginLeft:'5%'
    },
    title: {
        color: '#F7550B',
        fontSize: 25,
        fontWeight: 600,
        marginTop: 10
    },
    setting:{
        marginTop:5,
        marginRight:"5%"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'blue',
    },
    user: {
        flexDirection: 'row'
    },
    userWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userInfor: {
        marginLeft: 20
    },
    name: {
        fontSize: 15,
        fontWeight: 600
    },
    job: {
        fontSize: 15,
        fontWeight: 15
    },
    icon: {
        padding: 7,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 12,
        alignItems: 'center'
    }
})

export default Header