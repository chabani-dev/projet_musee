import { StyleSheet, Text, View , FlatList,Image ,Button , Dimensions} from 'react-native'
import React  , {useState , useEffect}from 'react'
import Confirm from '../composant/Confirm'
import ModifOeuvre from '../composant/ModifOeuvre'
import { db } from '../config/firebase'
import { getDocs , collection , doc , deleteDoc  } from "firebase/firestore"


export default function ListeOeuvres({update , setUpdate}) {
    const [oeuvre , setOeuvre] = useState([])
    const [id, setId] = useState("");


    useEffect( function() {
        getDocs(collection(db, "Oeuvres"))
            .then(function(reponse){
                const resultat = reponse.docs.map(function(doc){
                    return {...doc.data(), id : doc.id }
                })
                setOeuvre(resultat)
            })
    } , [update])

    function supprimer( id ){
        deleteDoc(doc(db, "Oeuvres", id))
            .then(function(){
                setUpdate(function(update){ return !update })
                alert("l'ouvre a bien été supprimé de la bdd")
            })
    }

  return (
    <View style={{flex: 1}}>
      <Text style={{color: "#FF2171" , fontSize : 20 , fontWeight: "600" , margin:30 , textAlign:"center"}}>Liste Oeuvres </Text>
      <View style={{ height : "auto" }}>
        <FlatList 
        data={oeuvre}
        renderItem={function({item}){
            return <View>
            { item.id === id 
                ? 
                <ModifOeuvre item={item} setUpdate={setUpdate} setId={setId}/>
                :
                <View>
                    <Text>titre : {item.nom}</Text>
                    <Text>id : {item.id}</Text>
                    <Image 
                        source={{ 
                            uri : item.image , 
                            width: Dimensions.get("window").width - 40 , 
                            height : 100 
                        }} 
                        fadeDuration={2000}
                        /> 
                    <Text>auteur : {item.auteur}</Text>
                    <Text> Description : {item.description} multiline={true}
          numberOfLines={5}</Text>
          
                    <View style={{ flexDirection : "row" }}>
                        <Button title={'modifier'} onPress={function(){
                            setId(item.id)
                        }} color={'orange'} />


                        <Button title={'supprimer'} onPress={function(){
                            Confirm(function(){ supprimer( item.id ) })  
                        }} color={'red'} />
                    </View>
                </View>
            }
            
        </View>
        }}
        keyExtractor={function(){ return Math.random().toString()}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
})