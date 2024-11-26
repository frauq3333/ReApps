// ArtistDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ArtistDetail({ route }) {
  const { artist } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información de {artist.name}</Text>
      <Image style={styles.artistImage} source={{ uri: artist.imageUrl }} />
      <Text style={styles.details}>Aquí puedes incluir información como la biografía del artista, álbumes populares, etc.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artistImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    color: '#333',
  },
});
