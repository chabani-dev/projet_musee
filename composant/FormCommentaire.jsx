import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const FormulaireCommentaire = ({ oeuvre, ajouterCommentaire }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const nouveauCommentaire = {
      id: Date.now(), // Générer un identifiant unique pour le commentaire
      message,
      email,
      date: new Date().toISOString(), // Obtenir la date actuelle
    };

    ajouterCommentaire(nouveauCommentaire);
    setEmail("");
    setMessage("");
  };

  return (
    <View>
      <TextInput
        placeholder="Email de l'auteur"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Soumettre" onPress={handleSubmit} />
    </View>
  );
};

export default FormulaireCommentaire;