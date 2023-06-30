import { StyleSheet, Alert } from 'react-native'

export default function Confirm( supprimer ) {
  return (
    Alert.alert(
        'Etes vous sûr ??',
        'vous allez supprimer un livre de la bdd êtes vous sûr ?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => { supprimer() },
            style: 'ok',
          },
        ]
      )
  )
}

const styles = StyleSheet.create({})