import React,{Component, useState} from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';
import Header from "../component/header";
import Footer from "../component/footer";

    export default function CrewCreate() {
        return(
            <View style={styles.container}>
                <Header title="모임 만들기"></Header>
                <View style={styles.crewCreateWrap}>
                    <SelectBox1></SelectBox1>
                    <SelectBox2></SelectBox2>
                </View>
                <Footer></Footer>
            </View>
        )
    }

    const SelectBox1 = () =>{
        const [selectedValue, setSelectedValue] = useState("1차 선택");
        const [selectedValue2, setSelectedValue2] = useState("2차 선택");
        return(
            <View>
                <View>
                    <Text style={styles.h1}>분야</Text>
                </View>
                <View  style = {styles.selectBoxWrap}>
                    <Picker selectedValue={selectedValue} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="1차선택" value="1차선택" />
                        <Picker.Item label="1차선택_2" value="1차선택_2" />
                    </Picker>
                    <Picker selectedValue={selectedValue2} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                        <Picker.Item label="2차선택" value="2차선택" />
                        <Picker.Item label="2차선택_2" value="2차선택_2" />
                    </Picker>
                </View>
            </View>
        )
    }

    const SelectBox2 = () =>{
        const [selectedValue, setSelectedValue] = useState("1차 선택");
        const [selectedValue2, setSelectedValue2] = useState("2차 선택");
        const [selectedValue3, setSelectedValue3] = useState("3차 선택");
        return(
            <View style = {styles.SelectBox2Wrap}>
                <View>
                    <Text style={styles.h1}>지역 (서울) </Text>
                </View>
                <View  style = {styles.selectBoxWrap}>
                    <Picker selectedValue={selectedValue} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="1차선택" value="1차선택" />
                        <Picker.Item label="1차선택_2" value="1차선택_2" />
                    </Picker>
                    <Picker selectedValue={selectedValue2} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                        <Picker.Item label="2차선택" value="2차선택" />
                        <Picker.Item label="2차선택_2" value="2차선택_2" />
                    </Picker>
                    <Picker selectedValue={selectedValue2} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                        <Picker.Item label="3차선택" value="3차선택" />
                        <Picker.Item label="3차선택_2" value="3차선택_2" />
                    </Picker>
                </View>
            </View>
        )
    }
    const styles = StyleSheet.create({
        container:{
            flex:1
        },
        crewCreateWrap:{
            flex:1,
            paddingLeft:30,
            paddingRight:30,
            paddingTop:15
        },
        h1:{
            fontSize:20,
            fontWeight:"700",
        },
        selectBoxWrap:{
            flexDirection:"row",
            marginTop:10,
        },
        selectBox:{
            width:"30%",
            height:50,
            paddingTop:10,
            paddingBottom:10,
            marginRight:20,
            backgroundColor: "#e9e9e9",
        },
        SelectBox2Wrap:{
            marginTop:10,
        }
    
    })

