import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "../component/header";
import Footer from "../component/footer";

export default class MyPage extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header></Header>
                <Footer></Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})