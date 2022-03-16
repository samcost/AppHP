import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { LinearGradient } from 'expo-linear-gradient';

export default function CharactersScreen({route}) {
    const {id} = route.params;

    const [character, setCharacter]=useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters/'+ id);
            const character = await response.json();
            setCharacter(character);
        }
        getData();
    }, []);

    const [color1, setColor1] = useState([]);

    useEffect(() => {

        if(character.hogwartsHouse=='Gryffindor'){
            setColor1('#b82e1f')
        } else if (character.hogwartsHouse=='Slytherin'){
            setColor1('#166d3b')
        } else if (character.hogwartsHouse=='Ravenclaw'){
            setColor1 ('#04619f')
        } else if (character.hogwartsHouse=='ninguna'){
            setColor1 ('#fff')
        };
    }, [character.hogwartsHouse]);

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 0., y: 0}} end={{x: 1, y: 0}}
                colors={['#202022' , color1]}
                style={styles.container}>
                <StatusBar style="auto" />
                <Image style={styles.imgcard} source={{uri:character.image}}/>
                <View style={styles.info}>
                    <Text style={styles.tittle}>{character.character}</Text>
                    <Text style={styles.tittle}>Casa:  {character.hogwartsHouse}</Text>
                    <Text style={styles.tittle}>Família:  {character.child}</Text>
                    <Text style={styles.tittle}>Interpretado por:  {character.interpretedBy}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {

      },
    imgcard:{
        width: '100%',
        height: '70%',
      },
      tittle: {
        fontWeight: 'bold',
        color:'#fff',
        marginStart: 5,
    },

});