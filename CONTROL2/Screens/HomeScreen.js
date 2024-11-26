// HomeScreen.js
import React from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  // Array de artistas
  const artists = [
    { id: 1, name: 'JB THE VOICE', imageUrl: 'https://i.scdn.co/image/ab67616d00001e0264102f678505293a937ccf1a' },
    { id: 2, name: 'LOCO RENE', imageUrl: 'https://i.pinimg.com/736x/c2/63/ea/c263ea085ec28a21efa4d992350c9dc4.jpg' },
    { id: 3, name: 'PABLO CHILL E', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPXFZjwTXNRiqepbmJmWcRGjeTHJYDvx9Xw&s' },
    { id: 4, name: 'BARBERO EXOTICO', imageUrl: 'https://yt3.googleusercontent.com/EA7QRkAGeshHqr7ceDJ-rYzfhGQjrcSM5AegMU5mjDDviKDVymmpVoZNj82PemRrmWZjK10siH0=s900-c-k-c0x00ffffff-no-rj' },
    { id: 5, name: 'lUIS JARA', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0gBw9Q0OAKkFFxqcwk6TGiKHjZEDw2ea8Q&s' },
  ];

  // Función para manejar el clic en el artista
  const handleArtistPress = (artist) => {
    navigation.navigate('ArtistDetail', { artist });
  };

  // Función para mostrar alerta
  const showAlert = (message) => {
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Artistas Latinos</Text>

      {/* Top 1 Artista */}
      <TouchableOpacity onPress={() => handleArtistPress(artists[0])}>
        <Image style={styles.topArtistImage} source={{ uri: artists[0].imageUrl }} />
      </TouchableOpacity>

      {/* Cuadrícula con otros 4 artistas */}
      <View style={styles.gridContainer}>
        {artists.slice(1).map((artist) => (
          <TouchableOpacity key={artist.id} onPress={() => handleArtistPress(artist)}>
            <Image style={styles.artistImage} source={{ uri: artist.imageUrl }} />
            <Text style={styles.artistName}>{artist.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botones en la parte inferior */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => showAlert('Agregado a la Playlist')}>
          <FontAwesome name="music" size={24} color="white" />
          <Text style={styles.buttonText}>Agregar a la Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => showAlert('Agregado a Favoritos')}>
          <FontAwesome name="heart" size={24} color="white" />
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  topArtistImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  artistImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  artistName: {
    textAlign: 'center',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});
