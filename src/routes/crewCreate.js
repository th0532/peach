import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "../component/header";
import Footer from "../component/footer";
import { ModalSelectList} from 'react-native-modal-select-list';
export default class CrewCreate extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header title="모임 만들기"></Header>
                <View style={styles.crewCreateWrap}>
                    <View>
                        <Text>분야</Text>
                    </View>

                </View>
                <Footer></Footer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    crewCreateWrap:{
        flex:1,
    }

})

