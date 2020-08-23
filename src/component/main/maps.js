import React,{Component, useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import mapData from "../../../data/map.json";
import axios from "axios";

  const Maps = () => {
    const [mapDataSet, setMapData] = useState([])
    const getMapData = () =>{
      setMapData(mapData.mapAll)
    }
    useEffect(() => {
      getMapData();
    }, []);

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
            {mapDataSet.map((data, index)=>{
              <Marker
                coordinate={{latitude:data.lat, longitude:data.lng}}
                title="this is a marker"
                description="this is a marker example"
              />
            })}
            {/* map 함수 Marker 컴포넌트 못 불러옴,, */}
            <Marker
                coordinate={{latitude:37.5990998, longitude:126.9861493}}
                title="this is a marker"
                description="this is a marker example"
              />
          </MapView>
        </View>
      )
  }

export default Maps;

const styles = StyleSheet.create({
    container:{
        flex:1
    },map:{
        flex:1,
        width: "100%",
    }
})
