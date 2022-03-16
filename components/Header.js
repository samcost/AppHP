import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.header}>
            <FontAwesome5 style={styles.icones} name="bars" size={25}/>
            <Image style={styles.ufrngram} source={require('../assets/img/HPLogo.jpg')}/>
            <View style={styles.icones}>
                <FontAwesome5 style={styles.icones} name="searchengin" size={25}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      height: 55,
      alignItems: 'center',
      justifyContent:'space-between',
      backgroundColor: '#FFFFFF',
      margin:10,
    },
    icones:{
      flexDirection: 'row',
      color:'#000000',
      marginRight: 10,
      marginLeft:10,
      alignSelf: 'center',
    },
    ufrngram:{
      width: 110,
      height: 45,
      alignSelf: 'center',
    },
    text:{
        fontWeight: 'bold',
    },
});