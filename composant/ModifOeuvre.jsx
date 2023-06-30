import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function ModifOeuvre({ item, setId, setUpdate }) {
  const [oeuvres, setOeuvres] = useState(item);

  function remplirOeuvres(valeurSaisie, nom) {
    const cloneOeuvres = { ...oeuvres };
    cloneOeuvres[nom] = valeurSaisie;
    setOeuvres(cloneOeuvres);
  }

  function submit(id) {
    updateDoc(doc(db, "Oeuvres", id), oeuvres).then(function () {
      setOeuvres({});
      setId("");
      setUpdate(function (update) {
        return !update;
      });
    });
  }

  return (
    <View>
      <TextInput
        placeholder="nom d'oeuvre"
        style={styles.input}
        onChangeText={function (valeurSaisie) {
          remplirOeuvres(valeurSaisie, "nom");
        }}
        value={oeuvres.nom}
      />
      <TextInput
        placeholder="image de l'oeuvre"
        style={styles.input}
        onChangeText={function (valeurSaisie) {
          remplirOeuvres(valeurSaisie, "image");
        }}
        value={oeuvres.image}
      />
      <TextInput
        placeholder="auteur l'oeuvre"
        style={styles.input}
        onChangeText={function (valeurSaisie) {
          remplirOeuvres(valeurSaisie, "auteur");
        }}
        value={oeuvres.auteur}
      />
      <TextInput
        placeholder="description de l'oeuvre"
        style={styles.input}
        onChangeText={function (valeurSaisie) {
          remplirOeuvres(valeurSaisie, "description");
          
        }}
        multiline={true}
        numberOfLines={5}
        value={oeuvres.description}
      />
      <View>
        <Button
          title={"go"}
          onPress={function () {
            submit(oeuvres.id);
          }}
          color={"#A7EDE7"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});