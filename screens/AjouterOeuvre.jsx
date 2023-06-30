import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React ,{useState} from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";


export default function AjouterOeuvre() {
    const [oeuvre, setOeuvre] = useState({});
    const formattedDate = oeuvre.dt_creation ? new Date(oeuvre.dt_creation).toLocaleDateString("fr-FR") : "";
  
    function remplirOeuvre(valeurSaisie, nom) {
      const cloneOeuvre = { ...oeuvre };
      cloneOeuvre[nom] = valeurSaisie;
      setOeuvre(cloneOeuvre);
    }
  
    function submit() {
      addDoc(collection(db, "Oeuvres"), oeuvre).then(function () {
        alert("L'oeuvre a été ajoutée en Bdd");
        setOeuvre({});
        setUpdate((update) => !update);
      });
    }
  
    return (
      <View>
        <Text style={styles.box}> Ajouter une oeuvre</Text>
        <TextInput
          placeholder="nom"
          style={styles.input}
          onChangeText={(textSaisie) => remplirOeuvre(textSaisie, "nom")}
          value={oeuvre.nom}
        />
        <TextInput
          placeholder="description"
          style={styles.input}
          onChangeText={(textSaisie) => remplirOeuvre(textSaisie, "description")}
          value={oeuvre.description}
          multiline={true}
          numberOfLines={5}
        />
        <TextInput
          placeholder="url image"
          style={styles.input}
          onChangeText={(textSaisie) => remplirOeuvre(textSaisie, "image")}
          value={oeuvre.image}
        />
        <TextInput
          placeholder="auteur"
          style={styles.input}
          onChangeText={(textSaisie) => remplirOeuvre(textSaisie, "auteur")}
          value={oeuvre.auteur}
        />
        <TextInput
          placeholder="dt_creation"
          style={styles.input}
          onChangeText={(textSaisie) => remplirOeuvre(textSaisie, "dt_creation")}
          value={formattedDate}
        />
        <TouchableOpacity style={styles.boxBtn} onPress={submit}>
          <Text style={styles.btn}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  titre: { fontSize: 25, marginBottom: 20 },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  box : { color: "#FF2171" , fontSize : 20 , fontWeight: "600" , margin:30 , textAlign:"center"},
  btn : { backgroundColor : "red" , padding : 10 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22, marginLeft:20 }
});