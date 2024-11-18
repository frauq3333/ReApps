import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ArtistCard = ({ artist }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: artist.image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{artist.name}</Text>
      <Text style={styles.genre}>{artist.genre}</Text>
      <Text style={styles.description}>{artist.description}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL(artist.spotifyLink)}>
          <Text style={styles.buttonText}>Spotify</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL(artist.wikipediaLink)}>
          <Text style={styles.buttonText}>Más Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  imageContainer: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  genre: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  gradient: {
    flex: 1,
  },
});

export default function App() {
  const artists = [
    {
      name: 'Kublai Khan TX',
      genre: 'Metalcore',
      description: 'Banda con origen en Texas y conocida por su estilo de metalcore...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvvnAx12OCH4SD1McGtAlBgP4-DcosY9nKA&s',
      spotifyLink: 'https://open.spotify.com/intl-es/artist/5BIOo2mCAokFcLHXO2Llb4?autoplay=true',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Kublai_Khan_(band)'
    },
    {
      name: 'Sunami',
      genre: 'Hardcore Punk',
      description: 'Sunami es una banda estadounidense de hardcore punk formada en San José...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMk9x_BzkRkpiMnuXZWKfCSrh-QprQTScflA&s',
      spotifyLink: 'https://open.spotify.com/intl-es/artist/1pBeRGeBHNPLy95LswDViS?autoplay=true',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Sunami_(band)'
    }
  ];

  return (
    <LinearGradient colors={['#a8c0ff', '#fbc2eb']} style={styles.gradient}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
