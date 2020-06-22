import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ListItem extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.containerTitle}>모임 추천</Text>
                <View style = {styles.listBox}>
                    <View style = {styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg'}}/>
                        <View style={styles.thumbnailDesc}>
                            <Text style = {styles.listTitle}>제목입니다.</Text>
                            <Text style = {styles.listDesc}>썸네일 설명 글입니다.</Text>
                        </View>
                    </View>
                    <View style = {styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg'}}/>
                        <View style={styles.thumbnailDesc}>
                            <Text style = {styles.listTitle}>제목입니다.</Text>
                            <Text style = {styles.listDesc}>썸네일 설명 글입니다.</Text>
                        </View>
                    </View>
                </View>
            </View>        
        
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffe0e0",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,
    },
    containerTitle:{
        paddingTop:"5%",
        paddingLeft:"7%",
        fontSize:16,
        fontWeight:"700",
        color:"black",
    },
    listBox:{
        flex:1,
        flexDirection:"row",
    },
    listItem:{
        marginTop:"5%",
        marginLeft:"7%",
        height:"40%",
        width:"40%",
    },
    thumbnail: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 0,
       borderTopLeftRadius: 20,
       borderTopRightRadius: 20,
    },
    thumbnailDesc:{
        backgroundColor:"white",
        paddingTop:5,
        paddingBottom:10,
        paddingLeft:10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    listTitle:{
        fontWeight:"700",
        fontSize:16,
        paddingTop:10,
        paddingBottom:5
    }
    
})