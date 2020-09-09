import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FirstComponent from "./components/FirstComponent";
import TitleComponent from "./components/TitleComponent";
import StateButton from "./components/StateButton";
import InputComponent from "./components/InputComponent";



/*
Kommentarer:

FirstComponent:
--> Er en ren og skær en component som ikke kan noget specielt som sådan
--> Den sender et <Text> fra component til App.js og viser teksten

TitleComponent:
--> Her er der lidt mere at lege med, nemlig en prop
--> En prop giver data til komponenten om hvordan den skal opføre sig, f.eks. stylling eller i det
    her tilfælde hvad der skal stå i propen "title"

StateButton:
--> Her en en state komponent. Den viser hvordan en State skifter når man trykker på en knap

InputComponent + SubTitleComponent:
--> Her vises der hvordan man kan benytte en tekst boks til at skifte tekst et sted gennem
    refference og ny brugerdefineret input value

 */


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Øvelse 2 - State, events, props og references </Text>
      <StatusBar style="auto" />

      <br/><br/>


      <FirstComponent/>

      <br/>


      <TitleComponent/>
      <TitleComponent title = 'Title 1' />
      <TitleComponent title = 'Title 2, osv.' />

      <br/>

      <StateButton/>

      <br/>

      <Text>4.  Nedenstående kan der sætttes en ny titel og nedenunder kan man se at tilen bliver skiftet</Text>
      <InputComponent/>


    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    component: {
      paddingTop: 10
    }
});
