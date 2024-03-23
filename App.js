import { StyleSheet, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import configureStore from './src/redux/stores/store';
import { Provider } from 'react-redux';


export default function App() {
  const store = configureStore()
  return (
    <View style={styles.appWrapper}>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  appWrapper:{
    flex:1,
    backgroundColor:'#ffffff',
    paddingTop:20
  }
})

