// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ArtistDetail from './Screens/ArtistDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Top Artistas' }} />
        <Stack.Screen name="ArtistDetail" component={ArtistDetail} options={{ title: 'Detalles del Artista' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
