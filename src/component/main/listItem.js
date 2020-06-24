import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class ListItem extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.containerTitle}>모임 추천</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator = {true}>
                    <View style = {styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg'}}/>
                        <View style={styles.thumbnailDesc}>
                            <Text style = {styles.listTitle}>제목입니다.</Text>
                            <Text style = {styles.listDesc}>썸네일 설명 글입니다.썸네일 설명 글입니다.썸네일 설명 글입니다.썸네일 설명 글입니다.</Text>
                        </View>
                    </View>
                    <View style = {styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg'}}/>
                        <View style={styles.thumbnailDesc}>
                            <Text style = {styles.listTitle}>제목입니다.</Text>
                            <Text style = {styles.listDesc}>썸네일 설명 글입니다.</Text>
                        </View>
                    </View>
                    <View style = {styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: 'https://cdn.pixabay.com/photo/2018/01/09/16/11/angler-3071970__340.jpg'}}/>
                        <View style={styles.thumbnailDesc}>
                            <Text style = {styles.listTitle}>제목입니다.</Text>
                            <Text style = {styles.listDesc}>썸네일 설명 글입니다.</Text>
                        </View>
                    </View>
                    <View style = {styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: 'https://cdn.pixabay.com/photo/2017/02/27/12/34/sunset-2103130__340.jpg'}}/>
                        <View style={styles.thumbnailDesc}>
                            <Text style = {styles.listTitle}>제목입니다.</Text>
                            <Text style = {styles.listDesc}>썸네일 설명 글입니다.</Text>
                        </View>
                    </View>
                </ScrollView>
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
    listItem:{
        height:"40%",
        width:200,
        marginLeft:20,
        marginTop:10
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
        paddingLeft:15,
        paddingRight:15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height:"97%",
        overflow:"hidden"
    },
    listTitle:{
        fontWeight:"700",
        fontSize:16,
        paddingTop:3,
        paddingBottom:3
    }
    
})