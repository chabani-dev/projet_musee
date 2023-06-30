import { StyleSheet, Text, View, FlatList , Image } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function Accueil({ navigation }) {
  const [oeuvres, setOeuvres] = useState([]);

  useEffect(function () {
    getDocs(collection(db, "Oeuvres")).then(function (reponse) {
      const resultat = reponse.docs.map(function (doc) {
        return doc.data();
      });
      setOeuvres(resultat);
    });
  }, []);

  function handleDetailsPress(id) {
    navigation.navigate("DetailOeuvre", { id: id });
  }

  return (
    <View>
      <Text style={styles.title}>Bienvenue !!</Text>
      <FlatList
        data={oeuvres}
        renderItem={function ({ item }) {
          return (
            <View>
                <Text style={styles.title} >{item.nom}</Text>
                <Text  style={styles.title}>{item.auteur}</Text>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              {/* <Button
                title={"Plus de détails"}
                onPress={() => handleDetailsPress(item._id)}
              /> */}
            </View>
          );
        }}
        keyExtractor={function () {
          return Math.random().toString();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
   margin :20,
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
});