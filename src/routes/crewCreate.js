import React,{Component, useState} from 'react';
import { StyleSheet, Text, View, Image, Picker, CheckBox } from 'react-native';
import Header from "../component/header";
import Footer from "../component/footer";

    export default function CrewCreate() {
        return(
            <View style={styles.container}>
                <Header title="모임 만들기"></Header>
                <View style={styles.crewCreateWrap}>
                    <Area></Area>
                    <Category></Category>
                    <Personnel></Personnel>
                    <MeetingDate></MeetingDate>
                </View>
                <Footer></Footer>
            </View>
        )
    }

// 지역 select
    const Area = () => {
        const [selectedValue, setSelectedValue] = useState("1차 선택");
        const [selectedValue2, setSelectedValue2] = useState("2차 선택");
        const [selectedValue3, setSelectedValue3] = useState("3차 선택");
        return(
            <View>
                <View>
                    <Text style={styles.h1}>지역 (서울) </Text>
                </View>
                <View  style = {styles.flexRowMg10}>
                    <Picker selectedValue={selectedValue} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="1차선택" value="1차선택" />
                        <Picker.Item label="1차선택_2" value="1차선택_2" />
                    </Picker>
                    <Picker selectedValue={selectedValue2} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                        <Picker.Item label="2차선택" value="2차선택" />
                        <Picker.Item label="2차선택_2" value="2차선택_2" />
                    </Picker>
                    <Picker selectedValue={selectedValue3} style={styles.selectBox} onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}>
                        <Picker.Item label="3차선택" value="3차선택" />
                        <Picker.Item label="3차선택_2" value="3차선택_2" />
                    </Picker>
                </View>
            </View>
        )
    }

    // 분야 select
    const Category = () => {
        const [selectedValue, setSelectedValue] = useState("1차 선택");
        const [selectedValue2, setSelectedValue2] = useState("2차 선택");
        return(
            <View style = {styles.CategoryWrap}>
                <View>
                    <Text style={styles.h1}>분야</Text>
                </View>
                <View  style = {styles.flexRowMg10}>
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

    const Personnel = () =>{
        const [checkFlag, setCheckFlag] = useState(false);
        return(
            <View>
                <View style={styles.flexRowMg10}>
                    <Text style={styles.h1}>모집인원</Text>
                    <CheckBox
                        value={checkFlag}
                        onValueChange={() => setCheckFlag({ checkFlag: !checkFlag })}
                    />
                    <Text>제한없음</Text>
                </View>
               
            </View>
        )
    }
    
    const MeetingDate = () =>{
        const [checkFlag, setCheckFlag] = useState(false);
        return(
            <View>
                <View style = {styles.flexRowMg10}>
                    <Text style={styles.h1}>모임날짜</Text>
                    <CheckBox
                        value={checkFlag}
                        onValueChange={() => setCheckFlag({ checkFlag: !checkFlag })}
                    />
                    <Text>미정</Text>
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
            fontSize:17,
            fontWeight:"700",
        },
        flexRowMg10:{
            flexDirection:"row",
            marginTop:10,
        },
        selectBox:{
            width:"30%",
            height:50,
            paddingTop:10,
            paddingBottom:10,
            marginRight:20,
            backgroundColor: "#f4f4f4",
        },
        CategoryWrap:{
            marginTop:10,
        }
    
    })

