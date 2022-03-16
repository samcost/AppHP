import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';

import Constants from 'expo-constants';

import Header from '../components/Header';
import Characters from '../components/Characters';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'#fff'}/>
      <Header/>
      <Text style={styles.class}>Personagens</Text>
      <Characters navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: Constants.statusBarHeight,
  },
  class:{
    color: "#000000",
    fontSize: 20,
    marginStart: 10,
    marginTop: 15,
    fontWeight: "bold",
  },
});