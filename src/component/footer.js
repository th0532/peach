import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Fotter extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.menu}>Home</Text>
                <Text style={styles.menu}>모임 찾기</Text>
                <Text style={styles.menu}>모임 만들기</Text>
                <Text style={styles.menu}>MyPage</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        height:"7%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'space-between',
        paddingLeft:15,
        paddingRight:15,
    },
    menu:{
        color:"#fd8b8b",
        fontWeight:"800",
        fontSize:16
    }
    
});
