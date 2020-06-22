import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Maps from "./maps";
import ListItem from "./listItem";

export default class mainContainer extends React.Component{
    render(){
        return(
            <View  style = {styles.container}>
                <Maps style = {styles.middle1}></Maps>
                <ListItem style = {styles.middle2}></ListItem>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    middle1:{
        flex:5,
        backgroundColor:"blue"
    },
    middle2:{
        flex:5,
        backgroundColor:"red"
    },
})