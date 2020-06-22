import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from "./src/routes/main";
export default function App() {
  return (
    <View style={styles.container}>
      <MainPage></MainPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
