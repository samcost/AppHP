import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CharactersScreen from './screens/CharactersScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CharactersScreen" component={CharactersScreen} options={{ title: 'Personagem', headerTintColor: '#fff', headerStyle: {backgroundColor: '#202022'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}
