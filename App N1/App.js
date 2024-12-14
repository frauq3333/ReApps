import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Accedemos a la colección "Users" y el documento "UserProfile"
        const documentSnapshot = await firestore()
          .collection('Users')
          .doc('UserProfile') // Nombre del documento
          .get();

        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data()); // Guardamos los datos en el estado
        } else {
          console.log('El documento no existe');
        }
      } catch (error) {
        console.error('Error al obtener los datos: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <View style={styles.card}>
          <Text style={styles.label}>Usuario:</Text>
          <Text style={styles.value}>{userData.User}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.Email}</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Cargando datos...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    width: '80%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  loading: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default App;
