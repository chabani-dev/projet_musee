import { StyleSheet, Text, View, FlatList , Image, TouchableOpacity } from "react-native";
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
    navigation.navigate("liste-oeuvres", { id: id });
  }

  return (
    <View style={{flex:1}}>
      <Text style={{color:"#85A389" , textAlign : "center" , fontSize: 20}}>Bienvenue !!</Text>
      <FlatList
        data={oeuvres}
        renderItem={function ({ item }) {
          return (
            <View>
                <Text style={styles.title} >Nom de l'oeuvre : {item.nom}</Text>
             
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <Text  style={styles.title}>Auteur de l'oeuvre : {item.auteur}</Text>
              <TouchableOpacity  style={styles.boxBtn}  onPress={() => handleDetailsPress(item._id)} >
                   <Text style={styles.btn}>Plus de détails</Text>
                </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20, 
   
  },
  // imageContainer: {
  //   marginBottom: 20,
  // },
  image: {
    marginLeft :50,
    height: 200,
    width: "60%",
    resizeMode: "contain",
  },
  boxBtn : { flexDirection : "row" , justifyContent : "center" },
  btn : { backgroundColor : "#A2CDB0" , padding : 5 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22 }
});