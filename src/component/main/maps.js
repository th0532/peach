import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Maps extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image style={styles.mapImage} source = {require('../../../assets/img/map.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },mapImage:{
        flex:1,
        width: "100%",
    }
    
})