import { StyleSheet,View } from 'react-native';
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AjouterOeuvre from './screens/AjouterOeuvre';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Accueil from './screens/Accueil';
import ListeOeuvres from './screens/ListeOeuvres';

const Tab = createBottomTabNavigator() ; // créer le Router 

export default function App() {
  return (
    <View style={{flex : 1}}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
            tabBarActiveTintColor : "red" , 
            tabBarInactiveTintColor : "blue",
            unmountOnBlur: true
            }}>
            <Tab.Screen name={'accueil'} component={Accueil} options={{
                headerTitle : "Bienvenue 🏛️",
                headerTitleAlign : "center",
                tabBarIcon: function({ color, size }){
                    return <MaterialCommunityIcons name={'home'} size={size} color={color} />
                }
            }}/>
            <Tab.Screen name={'ajouter-oeuvre'} component={AjouterOeuvre} options={{
                headerShown : false , 
                tabBarIcon : function({ color, size }){
                    return <MaterialCommunityIcons name={'format-list-bulleted'} size={size} color={color} />
                }
            }}/>
            <Tab.Screen name={'liste-oeuvres'} component={ ListeOeuvres } options={{
                headerShown : false , 
                tabBarIcon : function({ color, size }){
                    return <MaterialCommunityIcons name={'format-list-bulleted'} size={size} color={color} />
                }
            }}/>
           
        </Tab.Navigator>    
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({ });
