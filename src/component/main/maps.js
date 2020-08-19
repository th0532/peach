import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class Maps extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
            <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 37.5990998,
              longitude: 126.9861493,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{latitude: 37.5990998, longitude: 126.9861493}}
              title="this is a marker"
              description="this is a marker example"
            />
          </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },map:{
        flex:1,
        width: "100%",
    }
    
})
