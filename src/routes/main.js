import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "../component/header";
import Footer from "../component/footer";
import MainContainer from "../component/main/mainContainer";

export default class MainPage extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header></Header>
                <MainContainer ></MainContainer>
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