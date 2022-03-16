import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity } from 'react-native';


export default function Characters({navigation}){
    const [cards, setCards]= useState([]);

    useEffect(function(){
        async function getData(){
          const response = await fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters');
          const Servidor = await response.json();
          setCards(Servidor)
        }
        getData();
    }, [])

    function renderItem({item}){
        return <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CharactersScreen',{id: item.id})}>
                <ImageBackground style={styles.imgcard} source={{uri: item.image}}>
                    <Text style={styles.name}>{item.nickname}</Text>
                </ImageBackground>
            </TouchableOpacity>
    }

    return(
        <View style={styles.cards}>
            <FlatList 
                data={cards}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cards:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    card:{
      height: 500,
      width: 300,
      alignItems: 'center',
      margin: 10,
    },
    imgcard:{
      width: 300,
      height: 500,
      borderRadius: 20,
      shadowColor: 'red',
      overflow: 'hidden',
    },
    name:{
        color: "white",
        fontSize: 30,
        marginStart: 20,
        marginTop: 400,
        fontWeight: "bold",
    },
});