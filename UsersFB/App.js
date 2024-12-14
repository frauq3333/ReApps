import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Función para obtener datos de Firestore
    const fetchData = async () => {
      try {
        const docRef = doc(collection(db, "Users"), "UserProfile");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error obteniendo el documento:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Text style={styles.title}>Perfil de Usuario</Text>
          <Text>Email: {userData.Email}</Text>
          <Text>Usuario: {userData.User}</Text>
        </>
      ) : (
        <Text>Cargando datos...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
