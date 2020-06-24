import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from "./src/routes/main";
import CrewCreate from "./src/routes/crewCreate";

export default function App() {
        return (
            <View style = {styles.container}>
              <CrewCreate></CrewCreate>
            </View>
          )
}
// <MainPage></MainPage>
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
