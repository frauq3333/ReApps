import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ArtistCard = ({ artist }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: artist.image }} style={styles.image} />
      <Text style={styles.name}>{artist.name}</Text>
      <Text style={styles.genre}>{artist.genre}</Text>
      <Text style={styles.bio}>{artist.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  genre: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
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
      bio: 'Banda con origen en Texas, conocida por su estilo de metalcore agresivo y letras que abordan temas sociales.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvvnAx12OCH4SD1McGtAlBgP4-DcosY9nKA&s',
    },
    {
      name: 'Sunami',
      genre: 'Hardcore Punk',
      bio: 'Banda de hardcore punk formada en San José, conocida por su energía cruda y su actitud desafiante.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMk9x_BzkRkpiMnuXZWKfCSrh-QprQTScflA&s',
    },
  ];

  return (
    <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.gradient}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
