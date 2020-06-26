import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Top extends React.Component{
    render(props){
        return(
            <View style={styles.header}>
                <View style={styles.statusBar}></View>
                <View style={styles.top}>
                    <Text style={styles.logo}>{this.props.title}</Text>
                    <Image style={styles.login} source={{uri: 'https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814081_960_720.png'}}/>
                </View>
            </View>);
    }
}
const styles = StyleSheet.create({
    header:{
        height:"12%",
        backgroundColor:"#f9f9f9"
    },
    statusBar:{
        marginTop:"9%"
    },
    top:{
        height:45,
        backgroundColor:"#ffe0e0",
        paddingLeft:30,
        paddingRight:30,
        flexDirection:"row",
        justifyContent: "space-between",
        borderBottomWidth :2,
        borderBottomColor: '#e3e3e3',
        elevation: 6,
    },logo:{
        color:"#fd8b8b",
        fontWeight:"800",
        fontSize:28,   
    },
    login: {
        width: 35,
        marginTop:3,
        height: 35,
        borderRadius:25
      },

  },
);
