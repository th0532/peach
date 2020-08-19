import React,{Component, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from "./src/routes/main";
import CrewCreate from "./src/routes/crewCreate";

import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';



export default function App() {
  
  const getLocation = async() =>{
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  
     try {
       Geolocation.getCurrentPosition(
         (position)=>{
           console.log(position)
         },
         (error) =>{
           console.log(error.code, error.message);
         },
         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
       )
     } catch (error) {
      console.log(error)

     } 
  }

  useEffect(() => {
    getLocation()
  }, []);
  
        return (
            <View style = {styles.container}>
              <MainPage></MainPage>
            </View>
          )
}
// <MainPage></MainPage>
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
