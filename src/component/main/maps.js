import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Maps extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.listBox}>Maps</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },listBox:{
        flex:1,
    }
    
})